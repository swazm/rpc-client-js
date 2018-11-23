let request = function () {};

request.prototype.call = async function (payload) {
	return fetch(payload.url, {
		method: "POST",
		body: JSON.stringify(payload.data),
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
