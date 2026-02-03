const CACHE = "music-app-v1";

const FILES = [
  "index.html",
  "player.css",
  "manifest.json",

  "img/ado.png",
  "img/yuqi.png",
  "img/Radio.png",
  "img/shoka.png",
  "img/ado-ado-cute.gif",

  "cancion.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
