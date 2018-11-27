let Client = require('./index');

let client = new Client("http://127.0.0.1:1323/rpc");

client.info.Version().then((res) => {
	res.json().then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log(err);
	})
}).catch((err) => {
	console.log(err.message);
});

client.pushNotification.SaveToken({"token": "ExponentPushToken[svlnpDGQnQvsZBQmDtn5dF"}).then((res) => {
	res.json().then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log(err);
	})
}).catch((err) => {
	console.log(err.message);
});

client.pushNotification.Send({
	"token": "ExponentPushToken[svlnpDGQnQvsZBQmDtn5dF]",
	"body": "This is a test notification",
	"data":{"someKey":"someInfo"},
	"sound":"default",
	"title":"Test Notification",
	"priority":"default"
}).then((res) => {
	res.json().then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log(err);
	})
}).catch((err) => {
	console.log(err.message);
});