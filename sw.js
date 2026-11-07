// Service worker: guarda la app en caché para que funcione sin conexión.
// Si cambias index.html, sube el número de versión para forzar la actualización.
const CACHE = "farmaco-test-v28";
const FILES = ["./", "index.html", "data.js", "study.js", "apuntes.js", "app.js", "consultas.js", "art.js", "views.js", "decor.js", "avatar.js", "animals.js", "game.js", "grain.png", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "apuntes/t3-aines/apuntes.pdf", "apuntes/t3-aines/p1.webp", "apuntes/t3-aines/p2.webp", "apuntes/t3-aines/p3.webp", "apuntes/t3-aines/p4.webp", "apuntes/t3-aines/p5.webp", "apuntes/t3-aines/p6.webp", "apuntes/t3-aines/p7.webp", "apuntes/t3-aines/p8.webp"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero (para recibir actualizaciones), caché si no hay conexión.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })   // revalida siempre con el servidor: así no se queda ningún archivo viejo en la caché del navegador
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
