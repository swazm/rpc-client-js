let request = function () {
};

request.prototype.fetch = function (url) {
	debugUrl = url + "/rpc.json";
	return fetch(debugUrl).then(function (response) {
		return response.json();
	}).then(function (json) {
		return json
	}).catch((err) => {
		return err;
	});
};

request.prototype.call = async function (payload, token) {
	payload.data = payload.data || null;
	let body = {
		service: payload.service,
		method: payload.method,
		data: payload.data,
		id: payload.id,
	};

	let headers = {
		"Content-Type": "application/json",
	};

	if (token) {
		headers["Authorization"] = "Bearer " + token;
	}

	return fetch(payload.url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: headers,
		credentials: "same-origin"
	}).then((res) => {
		return res.json()
	}).then((json) => {
		return json;
	}).catch((err) => {
		return err;
	})

};

module.exports = new request;
