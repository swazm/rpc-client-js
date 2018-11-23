let Info = require("./src/services/info");
let Notification = require("./src/services/notification");

let Init = function (url) {
	this.url = url;
	return {
		info: new Info(this),
		notification: new Notification(this),
	};
};
module.exports = Init;