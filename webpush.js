const push = require('web-push');

let vapidKeys = {
  publicKey: 'BCCvCRLPbqoGZP5GprqoYYwV8k237ogHDWU663GYo_PM9sH9mA6nibK0cdaUUZXwz6aTXicrUvy8yRWXbxRG0Tw',
  privateKey: 'v--D0usmpAnwAtZDvFxUEioykQVvDJuuxxVRTGzMsA0'
};

push.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let subscription = {};

push.sendNotification(subscription, 'Your push notification message here');