const RPC = require("../index");

const RPCClient = {};

RPCClient.url = "";
RPCClient.token = "";
RPCClient.setURL = function (url) {
	this.url = url;
};

RPCClient.install = function (Vue, options) {
	let self = this;
	Vue.prototype.$client = async function () {
		let client = await RPC(self.url, self.token);
		return client;
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