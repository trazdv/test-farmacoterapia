// Service worker: guarda la app en caché para que funcione sin conexión.
// Si cambias index.html, sube el número de versión para forzar la actualización.
const CACHE = "farmaco-test-v31";
/* los PDF originales de los temas 2 y 4 completos (10 y 7 MB) no se guardan para usar sin conexión: se abren con internet */
const FILES = ["./", "index.html", "data.js", "study.js", "apuntes.js", "app.js", "consultas.js", "art.js", "views.js", "decor.js", "avatar.js", "animals.js", "game.js", "grain.png", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "apuntes/t2-autacoides/p1.webp", "apuntes/t2-autacoides/p2.webp", "apuntes/t2-autacoides/p3.webp", "apuntes/t2-autacoides/p4.webp", "apuntes/t2-autacoides/p5.webp", "apuntes/t2-autacoides/p6.webp", "apuntes/t2-autacoides/p7.webp", "apuntes/t2-autacoides/p8.webp", "apuntes/t2-autacoides/p9.webp", "apuntes/t2-autacoides/p10.webp", "apuntes/t2-autacoides/p11.webp", "apuntes/t2-autacoides/p12.webp", "apuntes/t2-autacoides/p13.webp", "apuntes/t2-autacoides/p14.webp", "apuntes/t2-autacoides/p15.webp", "apuntes/t2-autacoides/p16.webp", "apuntes/t2-autacoides/p17.webp", "apuntes/t2-autacoides/p18.webp", "apuntes/t2-autacoides/p19.webp", "apuntes/t2-autacoides/p20.webp", "apuntes/t2-autacoides/p21.webp", "apuntes/t2-autacoides/p22.webp", "apuntes/t2-autacoides/p23.webp", "apuntes/t2-autacoides/p24.webp", "apuntes/t2-autacoides/p25.webp", "apuntes/t2-autacoides/p26.webp", "apuntes/t2-autacoides/p27.webp", "apuntes/t2-autacoides/p28.webp", "apuntes/t2-autacoides/p29.webp", "apuntes/t2-autacoides/p30.webp", "apuntes/t2-autacoides/p31.webp", "apuntes/t2-autacoides/p32.webp", "apuntes/t2-autacoides/p33.webp", "apuntes/t4-esteroideos/p1.webp", "apuntes/t4-esteroideos/p2.webp", "apuntes/t4-esteroideos/p3.webp", "apuntes/t4-esteroideos/p4.webp", "apuntes/t4-esteroideos/p5.webp", "apuntes/t4-esteroideos/p6.webp", "apuntes/t4-esteroideos/p7.webp", "apuntes/t4-esteroideos/p8.webp", "apuntes/t4-esteroideos/p9.webp", "apuntes/t4-esteroideos/p10.webp", "apuntes/t4-esteroideos/p11.webp", "apuntes/t4-esteroideos/p12.webp", "apuntes/t4-esteroideos/p13.webp", "apuntes/t4-esteroideos/p14.webp", "apuntes/t4-esteroideos/p15.webp", "apuntes/t4-esteroideos/p16.webp", "apuntes/t4-esteroideos/p17.webp", "apuntes/t4-esteroideos/p18.webp", "apuntes/t4-esteroideos/p19.webp", "apuntes/t4-esteroideos/p20.webp", "apuntes/t2-eicosanoides/apuntes.pdf", "apuntes/t2-eicosanoides/p1.webp", "apuntes/t2-eicosanoides/p2.webp", "apuntes/t2-eicosanoides/p3.webp", "apuntes/t2-eicosanoides/p4.webp", "apuntes/t2-eicosanoides/p5.webp", "apuntes/t2-eicosanoides/p6.webp", "apuntes/t3-aines/apuntes.pdf", "apuntes/t3-aines/p1.webp", "apuntes/t3-aines/p2.webp", "apuntes/t3-aines/p3.webp", "apuntes/t3-aines/p4.webp", "apuntes/t3-aines/p5.webp", "apuntes/t3-aines/p6.webp", "apuntes/t3-aines/p7.webp", "apuntes/t3-aines/p8.webp"];

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
