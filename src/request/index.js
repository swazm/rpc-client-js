let request = function () {};

request.prototype.call = async function (payload) {
	let body = {
		service: payload.service,
		method: payload.method,
		data: payload.data,
		id: payload.id,
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
module.exports = new request;
