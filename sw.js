const CACHE_NAME = 'pushapp-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './sw.js',
  './icon.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    data = event.data.json();
  }

  const title = data.title || 'Default Title';
  const options = {
    body: data.body || 'Default body content',
    icon: 'icon.png',
    badge: 'icon.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || 'https://example.com'
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
