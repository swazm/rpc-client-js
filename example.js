let Client = require('./index');

(async () => {
	let client = await Client("https://red-rpc.swazm.com");

	client.Version.Info().then((res) => {
		res.json().then((response) => {
			console.log(response);
		}).catch((err) => {
			console.log(err);
		})
	}).catch((err) => {
		console.log(err.message);
	});

})();

/*

client.version.info().then((res) => {
		res.json().then((response) => {
			console.log(response);
		}).catch((err) => {
			console.log(err);
		})
	}).catch((err) => {
		console.log(err.message);
	});

client.pushNotification.saveToken({"token": "ExponentPushToken[svlnpDGQnQvsZBQmDtn5dF]"}).then((res) => {
	res.json().then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log(err);
	})
}).catch((err) => {
	console.log(err.message);
});

client.pushNotification.send({
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
*/