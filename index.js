let Notification = require("./src/services/notification");

let Init = function (url) {
	this.url = url;
	return {
		notification: new Notification(this),
	};
};
module.exports = Init;