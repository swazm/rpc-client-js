let request = require("./src/request");

let Init = async function (url, token) {
	this.url = url + "/rpc";
	this.token = token;
	this.expiredTokenCallback = function () {
	};
	this.paymentRequiredCallback = function () {
	};
	this.networkErrorCallback = function () {
	};

	let self = this;

	this.services = await request.fetch(this.url);

	client = {};

	this.services.map(function (service, index) {

		let Service = new Object();

		Service.name = service.Name;
		Service.methods = {};

		service.Method.map(function (method, index) {
			Service.methods[method.Name] = {
				requestType: method.RequestDataType,
				responseType: method.ResponseDataType
			};
			Service[method.Name] = function (paramsObject) {
				let payload = {
					url: self.url,
					id: 1,
					method: method.Name,
					service: this.name,
					data: paramsObject
				};
				return request.call(payload, self.token, client)
			}
		});

		client[service.Name] = Service;
	});

	client.setToken = function (token) {
		self.token = token;
	};

	client.getToken = function () {
		return self.token;
	};

	client.isAccessExpiredError = function (json) {
		return ((json.error !== null && json.data && json.data.error_code &&json.data.error_code.toString() === "401") || (json.error_code && json.error_code.toString() === "401"))
	};

	client.isPaymentRequiredError = function (json) {
		return ((json.error !== null && json.data && json.data.error_code && json.data.error_code.toString() === "402") || (json.error_code && json.error_code.toString() === "402"))
	};

	client.isCallbackHandledError = function (json) {
		return (this.isAccessExpiredError(json) || this.isPaymentRequiredError(json))
	};

	return client;
};

module.exports = Init;
