let Info = require("./src/services/info");
let PushNotification = require("./src/services/pushnotification");

let Init = function (url) {
	this.url = url;
	return {
		info: new Info(this),
		pushNotification: new PushNotification(this),
	};
};
module.exports = Init;