angular.module('app').controller('mvMainCtrl', function($scope){
  $scope.courses = [
  	{ name: 'Building AngularJS and Node.js Apps with the MEAN Stack', featured: true, published: new Date('2014,01,31') },
  	{ name: 'C# Fundamentals with C# 5.0', featured: true, published: new Date('2014,02,28') },
  	{ name: 'Advanced JavaScript', featured: true, published: new Date('2015,04,10') },
  	{ name: 'Angular Front to Back with Web API', featured: false, published: new Date('2015,04,16') },
  	{ name: 'Java Fundamentals, Part 1', featured: false, published: new Date('2011,11,04') },
  	{ name: 'Python Fundamentals', featured: true, published: new Date('2013,08,10') },
  ];
});