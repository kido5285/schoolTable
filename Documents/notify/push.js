var push = require('web-push')

var keys = {
    publicKey: 'BKRNs_2Yj4mcyuQfxs75Jj3C985qQ_svsJGtU3t9NQGucbxQQeCZahVO6WXfM1AG4SuaFZc4xSjhBcNg5qVV6Kk',
    privateKey: 'NL4-F9ob1pOTwUDwWni70nXR2bEhh_RF7bUxflA05d0'
  };

push.setVapidDetails('mailto:test@code.co.uk', keys.publicKey,keys.privateKey);

let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/f9grkZGapMA:APA91bH3J8m0fsy4OBuIt9XlOSYprfz4wXb1Y7ERyTJM37cdtc3xCIjE1Ytni7zgucyy2aDKbHBfRBnJEgNMUuIWSvO9lOvEexsh-RAPCGHlhmH-F9O5GN3GcPEpHWoX4vQp-wB9Uoif",
expirationTime:null,
keys:{
    p256dh:"BGuUA-FZ6cn9MnnoSA2UDU1HMvHL16-IpDOwtunh9qBiY4PjPePl4inKMGJt0AZzjZzi8KjPJzLL_rF9Lm5oMNI",
    auth:"EdeeRdw-0UwdbwR0qugEsw"}}


var minutes = 5, the_interval = minutes * 60 * 1000;
setTimeout(function() {
    push.sendNotification(sub, 'test message')
}, 10000);