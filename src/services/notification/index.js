let request = require('../../request');
let config = require('../config');

let Notification = function (base) {
	this.url = base.url;
};

Notification.prototype.SaveToken = function (paramsObject) {
	let payload = {
		url: this.url,
		jsonrpc: "2.0",
		id: 1,
		method: "RED.NotificationSaveToken",
		input: paramsObject
	};
	return request.call(payload)
};

module.exports = Notification;
