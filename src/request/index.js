if (!fetch) {
	var fetch = require("node-fetch");
}

let request = function () {};

request.prototype.call = async function (payload) {
	let body = {
		method: payload.method,
		input: payload.input,
		id: payload.id,
		jsonrpc: payload.jsonrpc
	}
	return fetch(payload.url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin"
	});

};

request.prototype.customCall = async function (url, method, data, headers) {
	return fetch(url, {
		method: method,
		body: data,
		headers: {
			...headers,
		},
		credentials: "same-origin"
	});
};

module.exports = new request;
