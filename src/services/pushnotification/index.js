let request = require('../../request');
let config = require('../config');

let PushNotificationService = config.services.pushNotification;

let PushNotification = function (base) {
	this.url = base.url;
};

PushNotification.prototype.SaveToken = function (paramsObject) {
	let payload = {
		url: this.url,
		id: 1,
		method: PushNotificationService.methods.saveToken,
		service: PushNotificationService.name,
		data: paramsObject
	};
	return request.call(payload)
};

PushNotification.prototype.Send = function (paramsObject) {
	let payload = {
		url: this.url,
		id: 1,
		method: PushNotificationService.methods.send,
		service: PushNotificationService.name,
		data: paramsObject
	};
	return request.call(payload)
};

module.exports = PushNotification;
