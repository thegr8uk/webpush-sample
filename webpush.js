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

let subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c1nor_YwIVs:APA91bFRqTi-PJPDQ130OCzWFLgh3BqLwyu2HrhNUnbBM3oBJtl0bH8THg7YIrjol8TbfpbJiwbs70tLQOUEX2mWhl9rhF6GukWQxYIzWkTScSWXN2pkImKVABJrX7wBlNrAinUDY3th","expirationTime":null,"keys":{"p256dh":"BNHjiaG0N-FcXX8t0L94cByZAzV_yuufPcdh-o3QmKVp8LRmHKJs80RGLdxdamQR68dlsgSbif5noz2f1yIMJwc","auth":"hpkGP_1gW8zycloMUrlqjg"}};

const payload = JSON.stringify({
  title: 'TT',
  body: 'DOWN 2725 | nifty Scalping Strangle smooth Rider',
  url: 'https://yourdomain.com/page'
});

push.sendNotification(subscription, payload);