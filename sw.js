// node src/build-app.js が作るファイル。直接書き換えない
const VERSION = 'a673b7b1d217';
const CACHE = 'shisa-' + VERSION;
const FONT_CACHE = 'shisa-fonts';
const PRECACHE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "img/ekishou02.webp",
  "img/ekishou05.webp",
  "img/ekishou06.webp",
  "img/ekishou07.webp",
  "img/ekishou08.webp",
  "img/ekishou09.webp",
  "img/ekishou10.webp",
  "img/ekishou103.webp",
  "img/ekishou11.webp",
  "img/ekishou12.webp",
  "img/ekishou22.webp",
  "img/ekishou26.webp",
  "img/ekishou27.webp",
  "img/ekishou28.webp",
  "img/ekishou29.webp",
  "img/ekishou30.webp",
  "img/ekishou32.webp",
  "img/ekishou41.webp",
  "img/ekishou42.webp",
  "img/ekishou43.webp",
  "img/ekishou64.webp",
  "img/ekishou67.webp",
  "img/ekishou69.webp",
  "img/ekishou70.webp",
  "img/ekishou71.webp",
  "img/ekishou72.webp",
  "img/ekishou73.webp",
  "img/ekishou74.webp",
  "img/ekishou75.webp",
  "img/ekishou76.webp",
  "img/ekishou77.webp",
  "img/ekishou78.webp",
  "img/ekishou80.webp",
  "img/ekishou81.webp",
  "img/ekishou82.webp",
  "img/ekishou83.webp",
  "img/ekishou84.webp",
  "img/ekishou85.webp",
  "img/ekishou86.webp",
  "img/ekishou87.webp",
  "img/ekishou88.webp",
  "img/ekishou89.webp",
  "img/ekishou90.webp",
  "img/ekishou91.webp",
  "img/ekishou92.webp",
  "img/ekishou93.webp",
  "img/uchikata09.webp",
  "img/uchikata10.webp",
  "img/uchikata11.webp"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
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

  // 写真・アイコンなど：保存したもの優先
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
    }
    return res;
  })));
});
