angular.module('BasicInstagram').config(function($routeProvider) {
	$routeProvider
	.when('/myinstagram', {
		templateUrl: '../assets/templates/test.html'
	})

	.when('/myinstagram/register', {
		templateUrl: '../assets/templates/register/register.html'
	})

	.otherwise({redirectTo: '/myinstagram'});
})
