let request = function () {
};

request.prototype.fetch = function (url) {
	debugUrl = url + "/rpc.json";
	return fetch(debugUrl).then(function (response) {
		return response.json();
	}).then(function (json) {
		return json
	});
};

request.prototype.call = async function (payload) {
	payload.data = payload.data || null;
	let body = {
		service: payload.service,
		method: payload.method,
		data: payload.data,
		id: payload.id,
	};
	return fetch(payload.url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin"
	});

};

module.exports = new request;
