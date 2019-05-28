const RPC = require("../index");

const RPCClient = {};

RPCClient.url = "";
RPCClient.token = "";
RPCClient.tokenExpiredCallback = () => {};
RPCClient.paymentRequiredCallback = () => {};
RPCClient.setURL = function (url) {
	this.url = url;
};

RPCClient.install = function (Vue, options) {
	let self = this;
	self.client = {};

	Vue.clientSetTokenExpiredCallback = function (callback) {
		self.tokenExpiredCallback = callback;
	};

	Vue.clientSetPaymentRequiredCallback = function (callback) {
		self.paymentRequiredCallback = callback;
	};

	Vue.prototype.$clientInit = async function () {
		let client = await RPC(self.url, self.token);
		client.expiredTokenCallback = self.tokenExpiredCallback;
		client.paymentRequiredCallback = self.paymentRequiredCallback;

		console.log(client);

		self.client = client;
	};

	Vue.prototype.$client = function () {
		return self.client;
	};
	Vue.prototype.$setClientToken = function (token) {
		this.token = token;
	};
	Vue.prototype.$getClientToken = function () {
		return this.token;
	};
}
;

module.exports = RPCClient;