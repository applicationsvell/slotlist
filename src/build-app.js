// ホーム画面アプリ版をつくる：node src/build-app.js
// src/page.html（アーティファクト版と同じページ）から、ルートの index.html・manifest.webmanifest・sw.js を作り直す
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const page = fs.readFileSync(path.join(__dirname, 'page.html'), 'utf8');

// <header> より前（title・フォント・style）は head へ、残りは body へ
const cut = page.indexOf('<header');
if (cut < 0) throw new Error('src/page.html に <header> が見つかりません');
const head = page.slice(0, cut).replace(/^<meta name="claude:viewport-fit-sides"[^>]*>\n?/m, '').trim();
const body = page.slice(cut).trim();

const icons = ['icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'];

// 写真の縦横を webp の頭から読む（読み込み前に場所を確保するため）
function webpSize(buf) {
  const t = buf.toString('ascii', 12, 16);
  if (t === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
  if (t === 'VP8L') { const b = buf.readUInt32LE(21); return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1]; }
  if (t === 'VP8X') return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1];
  throw new Error('webp の形式が読めません');
}
const imgs = [];
const dims = {};
for (const m of fs.readdirSync(path.join(ROOT, 'img')).sort()) {
  const dir = path.join(ROOT, 'img', m);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort()) {
    imgs.push('img/' + m + '/' + f);
    dims[m + '/' + f.replace(/\.webp$/, '')] = webpSize(fs.readFileSync(path.join(dir, f)));
  }
}
fs.writeFileSync(path.join(ROOT, 'machines', 'dims.js'),
  '// node src/build-app.js が作るファイル。写真の縦横\nwindow.SHISA_DIM = ' + JSON.stringify(dims) + ';\n');
const machineFiles = fs.readdirSync(path.join(ROOT, 'machines')).filter(f => f.endsWith('.js')).sort().map(f => 'machines/' + f);

const html = `<!doctype html>
<html lang="ja" class="app">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="パチスロの設定示唆・演出をすぐ引ける早見帳。機種をプルダウンで切り替えて、終了画面やアイキャッチの示唆を写真つきで確認できる。">
<meta name="theme-color" content="#3797EC" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#15275C" media="(prefers-color-scheme: dark)">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="シサミル">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px);-webkit-tap-highlight-color:transparent}body{margin:0;padding:0}img{max-width:100%}[hidden]{display:none!important}</style>
<script>window.APP_MODE = true;</script>
${head}
</head>
<body>
${body}
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}
</script>
</body>
</html>
`;

const manifest = JSON.stringify({
  name: 'シサミル',
  short_name: 'シサミル',
  description: 'パチスロの設定示唆・演出をすぐ引ける早見帳',
  lang: 'ja',
  id: './',
  start_url: './',
  scope: './',
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#E6F2FF',
  theme_color: '#3797EC',
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2) + '\n';

// 中身が変わったときだけ版が変わるように、全ファイルから版を決める
const hash = crypto.createHash('sha256');
hash.update(html);
hash.update(manifest);
for (const f of imgs.concat(icons, machineFiles)) {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) hash.update(fs.readFileSync(p));
}
const VERSION = hash.digest('hex').slice(0, 12);

// 写真は機種を開いたときにページ側で保存する（全部を最初に落とすと重いため）
const precache = ['./', 'index.html', 'manifest.webmanifest'].concat(icons, machineFiles);

const sw = `// node src/build-app.js が作るファイル。直接書き換えない
const VERSION = '${VERSION}';
const CACHE = 'shisa-' + VERSION;
const FONT_CACHE = 'shisa-fonts';
const IMG_CACHE = 'shisa-img';
const PRECACHE = ${JSON.stringify(precache, null, 2)};

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE && k !== IMG_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Googleフォント：手元にあればそれを使い、裏で新しくする
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONT_CACHE).then((c) => c.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res.ok || res.type === 'opaque') c.put(req, res.clone());
        return res;
      }).catch(() => hit || Response.error());
      return hit || net;
    })));
    return;
  }
  if (url.origin !== self.location.origin) return;

  // ページ：ネット優先（4秒で諦める）→ だめなら保存したもの
  if (req.mode === 'navigate') {
    e.respondWith(
      Promise.race([fetch(req), timeout(4000)]).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
        }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./')))
    );
    return;
  }

  // 写真・アイコンなど：保存したもの優先。写真は版が変わっても消さない箱に入れる
  const box = url.pathname.indexOf('/img/') !== -1 ? IMG_CACHE : CACHE;
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(box).then((c) => c.put(req, copy));
    }
    return res;
  })));
});
`;

fs.writeFileSync(path.join(ROOT, 'index.html'), html);
fs.writeFileSync(path.join(ROOT, 'manifest.webmanifest'), manifest);
fs.writeFileSync(path.join(ROOT, 'sw.js'), sw);
console.log('作り直しました：index.html / manifest.webmanifest / sw.js / machines/dims.js（版 ' + VERSION + '、事前保存 ' + precache.length + ' ファイル、写真 ' + imgs.length + ' 枚）');
