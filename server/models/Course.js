var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type: String, required: '{PATH} is required!'},
	featured: {type: Boolean, required: '{PATH} is required!'},
	published: {type: Date, required: '{PATH} is required!'},
	tags: [String],
});
var Course = mongoose.model('Course', courseSchema);


function createDefaultCourses(){
	Course.find({}).exec(function(err, collection){
		if (collection.length === 0){
			Course.create({ title: 'Building AngularJS and Node.js Apps with the MEAN Stack', featured: true, published: new Date('2014,01,31'), tags: ["AnglarJS", "MEAN"] });
		  	Course.create({ title: 'C# Fundamentals with C# 5.0', featured: true, published: new Date('2014,02,28'), tags: ["C#"] });
		  	Course.create({ title: 'Advanced JavaScript', featured: true, published: new Date('2015,04,10'), tags: ["JS"] });
		  	Course.create({ title: 'Angular Front to Back with Web API', featured: false, published: new Date('2015,04,16'), tags: ["AnglarJS", "JS"] });
		  	Course.create({ title: 'Java Fundamentals, Part 1', featured: false, published: new Date('2011,11,04'), tags: ["Java", "Programming"] });
		  	Course.create({ title: 'Python Fundamentals', featured: true, published: new Date('2013,08,10'), tags: ["Python"] });
		}
	});
};

exports.createDefaultCourses = createDefaultCourses;