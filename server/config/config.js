var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath, 
		db: 'mongodb://gdangelo:multivision@ds063160.mongolab.com:63160/multivision',
		port: process.env.PORT || 80
	}
};