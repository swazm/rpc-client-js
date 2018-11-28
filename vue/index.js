const RPC = require("../index");

const RPCClient = {};

RPCClient.url = "";
RPCClient.setURL = function (url) {
	this.url = url;
};

RPCClient.install = function (Vue, options) {
	let self = this;
	Vue.prototype.$client = async function (methodOptions) {
		let client = await RPC(self.url);
		return client;
	}
};

module.exports = RPCClient;