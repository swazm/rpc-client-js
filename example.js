let Client = require('./index');

(async () => {
	let client = await Client("http://192.168.1.229:1323");

	// client.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozMCwic2NvcGUiOjIsImFjY2Vzc19zaWduYXR1cmUiOnsic2lnbmF0dXJlIjoiMTJiZDU4M2RkMjViODY4ZTY0MjNkOGYwNGNjMTlmZDE3MTg1ZjdhYjU2Y2I3OTc1MGUxZjU4ZDQ1NDE2MzJlMiIsImV4cGlyZXMiOiIyMDE5LTAyLTE4VDE1OjE1OjQ3LjM3NDY3MiswMjowMCJ9LCJleHAiOjE1NTgyNzE2ODcsImlzcyI6InJwYyJ9.fin7ofr3ohRc6wxHOPnJbQJb48B_l40lL-UiezA-uB0");
	client.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJzY29wZSI6MiwiYWNjZXNzX3NpZ25hdHVyZSI6eyJzaWduYXR1cmUiOiIxMmJkNTgzZGQyNWI4NjhlNjQyM2Q4ZjA0Y2MxOWZkMTcxODVmN2FiNTZjYjc5NzUwZTFmNThkNDU0MTYzMmUyIiwiZXhwaXJlcyI6IjIwMTktMDUtMjhUMTY6MzU6NTIuODI4MDE4KzAzOjAwIn0sImV4cCI6MTU2NjgxOTM1MiwiaWF0IjoxNTU5MDQzMzUyLCJpc3MiOiJycGMifQ.oJiR_eS3uf2kEVJYmTCQ39v-H335g6MPq-czx1o4A1Q");

	try {

		client.expiredTokenCallback = function (res) {
			// console.log(res);
			console.log("expired token");
		};

		client.paymentRequiredCallback = function (res) {
			// console.log(res);
			console.log("payment required");
		};

		let response = await client.User.Stats();
		// console.log(response);
	} catch(e) {
		// console.log(e);
	}

})();
