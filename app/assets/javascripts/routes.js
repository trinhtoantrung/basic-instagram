angular.module('BasicInstagram').config(function($routeProvider) {
	$routeProvider
	.when('/myinstagram', {
		templateUrl: '../assets/templates/test.html',
		controller: "MyInstagramController"
	})

	.when('/myinstagram/register', {
		templateUrl: '../assets/templates/register/register.html',
		controller: "MyRegisterController"
	})

	.otherwise({redirectTo: '/myinstagram'});
})
