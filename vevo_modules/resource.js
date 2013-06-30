var config = require('../config/app-config').config,
restHandler = require('/rest-handler');

exports.video = restHandler.handle( config.vevoApiHost, config.vevoApiPort,
config.vevoUri + '/video/list.json');

exports.genre = restHandler.handle( config.vevoApiHost, config.vevoApiPort,
config.vevoUri + '/genre/list.json');


