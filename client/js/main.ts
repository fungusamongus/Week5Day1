//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['ngRoute', 'ngResource']);








app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			controller: 'blog.controller.js',
			templateUrl: 'views/blogposts.html'
		})
		.when('/newpost', {
			controller: 'post.controller.js',
			templateUrl: 'views/newpost.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);