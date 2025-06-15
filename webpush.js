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

let subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eRSLQ19eKEI:APA91bFhVUiTfHYYW5Fa-2xCF0z6dfoNc132bNskWmzt-wOVlbUukPoZdI15NOQW4jJXQvYaoFxYHdxi92AmviSnhaC-GiNsllvX_vCUvxDoqlfdTFeC7YFYRrpr60WA5CkocpidMDcF","expirationTime":null,"keys":{"p256dh":"BMzqVru4hyTFCFVMYngUCO78UmixKrBvVBxqKI4NiiN4GtgasUuRWcyuP5_OoeulmKT1eGVSNQIDZWb9L1sF-OA","auth":"FBcuXLRz2es68KQLPAIJWA"}};

const payload = JSON.stringify({
  title: 'Push from Backend',
  body: 'Your push notification message here',
  url: 'https://yourdomain.com/page'
});

push.sendNotification(subscription, payload);