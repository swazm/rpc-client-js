let request = require('../../request');
let config = require('../config');

let VersionService = config.services.version;

let Info = function (base) {
	this.url = base.url;
};

Info.prototype.Version = function () {
	let payload = {
		url: this.url,
		id: 1,
		method: VersionService.methods.info,
		service: VersionService.name,
		data: null
	};
	return request.call(payload)
};

module.exports = Info;
