let request = require("./src/request");

let Init = async function (url) {
	this.url = url + "/rpc";
	let self = this;

	this.services = await request.fetch(this.url);

	client = {};

	this.services.map(function(service, index) {

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
				return request.call(payload)
			}
		});

		client[service.Name] = Service;
	});

	return client;
};
module.exports = Init;