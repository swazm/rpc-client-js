const RPC = require("../index");

const RPCClient = {};
RPCClient.install = function (Vue, options) {
	Vue.prototype.$client = async function (methodOptions) {
		let client = await RPC("https://red-rpc.swazm.com");
		return client;
	}
};

module.exports = RPCClient;