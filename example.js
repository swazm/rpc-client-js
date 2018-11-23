let Client = require('./index');

let client = new Client("http://127.0.0.1:5445");

console.log(client.notification.SaveToken());