self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    data = event.data.json();
  }

  const title = data.title || 'Default Title';
  const options = {
    body: data.body || 'Default body content',
    icon: 'icon.png',
    badge: 'badge.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || 'https://example.com'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});