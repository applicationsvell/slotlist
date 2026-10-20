// node src/build-app.js が作るファイル。直接書き換えない
const VERSION = 'ac5ca610f413';
const CACHE = 'shisa-' + VERSION;
const FONT_CACHE = 'shisa-fonts';
const IMG_CACHE = 'shisa-img';
const PRECACHE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "machines/aobuta.js",
  "machines/dims.js",
  "machines/index2.js",
  "machines/lycoreco.js",
  "machines/otome5.js",
  "machines/paripi.js",
  "machines/sao2.js",
  "machines/sunbreak.js",
  "machines/valvrave.js",
  "machines/valvrave2.js"
];

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
