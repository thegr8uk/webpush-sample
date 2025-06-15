self.addEventListener('push', () => {
    options = {
        body: 'This is a notification from your service worker!',
        icon: 'icon.png',
        badge: 'badge.png',
        vibrate: [100, 50, 100],
        data: {
            url: 'https://example.com'
        }
    };
    self.registration.showNotification('Hello world!', options);
});