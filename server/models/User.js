var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');	

var userSchema = mongoose.Schema({
	firstName: {type: String, required: '{PATH} is required!'},
	lastName: {type: String, required: '{PATH} is required!'},
	username: { type: String, required: '{PATH} is required!', index: { unique: true } },
	salt: {type: String, required: '{PATH} is required!'},
	hashed_pwd: {type: String, required: '{PATH} is required!'},
	roles: [String]
});
userSchema.methods = {
	authenticate: function(passwordToMatch){
		return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
	}
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers(){
	User.find({}).exec(function(err, collection){
		if (collection.length === 0){
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'gdangelo');
			User.create({ firstName: 'Grégory', lastName: "D'Angelo", username: 'gdangelo', salt:salt, hashed_pwd:hash, roles: ['admin'] });
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'rdeniro');
			User.create({ firstName: 'Robert', lastName: "DeNiro", username: 'rdeniro', salt:salt, hashed_pwd:hash, roles: [] });
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'jdoe');
			User.create({ firstName: 'John', lastName: "Doe", username: 'jdoe', salt:salt, hashed_pwd:hash });
		}
	});
};

exports.createDefaultUsers = createDefaultUsers;
