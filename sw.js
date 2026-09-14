const CACHE = 'campaign-momentum-v1';
const ASSETS = ['/index.html', '/app.html', '/manifest.json', '/icon-192.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (cache) { return cache.addAll(ASSETS); }));
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (cached) { return cached || fetch(e.request); })
  );
});
