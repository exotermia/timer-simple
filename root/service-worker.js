self.addEventListener('install', function (event) {
    console.log('Service worker installed');
  });
  
  self.addEventListener('fetch', function (event) {
    // This is basic; we can make it fancier with caching later
  });
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('timer-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon-192.png',
          '/icon-512.png',
          '/style.css',
          '/script.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  