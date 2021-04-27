var push = require('web-push')

var keys = {
    publicKey: 'BKRNs_2Yj4mcyuQfxs75Jj3C985qQ_svsJGtU3t9NQGucbxQQeCZahVO6WXfM1AG4SuaFZc4xSjhBcNg5qVV6Kk',
    privateKey: 'NL4-F9ob1pOTwUDwWni70nXR2bEhh_RF7bUxflA05d0'
  };

push.setVapidDetails('mailto:test@code.co.uk', keys.publicKey,keys.privateKey);

let sub = {endpoint:"https://sg2p.notify.windows.com/w/?token=BQYAAABj5oLw5hVrPSJtuASg7O4tUt2b1CbAkZCz5c6rn5KwXzX4luRBzJ%2bbyNy4FQ2h%2bTl6VxebqjdzgoYYKYQs5Q6kQIkfiG5xaH5XeZCpAo2kfgIf88sXgIklS5LPcOYWRnmRXKZUnN13FAdFWZrFwPcA61LLNIKnsg48jpVNBqbqloVW8A0KFupwc922nkvdIV7%2ftHiw%2bkKugiyNKMiw0JJ5CLel4W2%2bYrKIItJznbWF1XNcLzUKxtkCVrY5EqLwVKK5Qa74IJTwrjntyQQ1PZvRsRxtLyWs9xwhXU5TY8QEwaQ%2fk1LMt%2b7LzppmLvWgYGZW5ZKG6jQhwNpWoc%2fJMFntisA%2fcHGSASR4mmaNy0KlBQ%3d%3d",expirationTime:null,keys:{p256dh:"BMIhaJkw4VFVLwZH4OrZ1lCb66uJFiSAKPKX-T4bQsB5Z7YN9qyHtwnT0OQ1P28mh8h8tIhMJSQgxDGbd1yPxvw",
auth:"XU5ilsWGfzljouwvPa9_wg"}}


var minutes = 5, the_interval = minutes * 60 * 1000;
setTimeout(() => {
    push.sendNotification(sub, 'test message');
}, 10000);