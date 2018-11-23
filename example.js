let Client = require('./index');

let client = new Client("http://127.0.0.1:8080/rpc");

client.info.Version().then((res) => {
	res.json().then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log(err);
	})
}).catch((err) => {
	console.log(err);
});