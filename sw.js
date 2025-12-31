self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('my-store').then((cache) => cache.addAll([
      '/index.html',
      '/style.css',
      '/logo.png',    // <-- Yaha mene aapka logo add kar diya he
      '/manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
