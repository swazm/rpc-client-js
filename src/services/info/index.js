let request = require('../../request');
let config = require('../config');

let Info = function (base) {
	this.url = base.url;
};

Info.prototype.Version = function () {
	let payload = {
		url: this.url,
		jsonrpc: "2.0",
		id: 1,
		method: "Version",
		params: null
	};
	return request.call(payload)
};

module.exports = Info;
