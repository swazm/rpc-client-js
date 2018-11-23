let Client = require('./index');

let client = new Client("http://127.0.0.1:5445");

client.info.Version().then((res) => {
	console.log(res);
}).catch((err) => {
	console.log(err);
});