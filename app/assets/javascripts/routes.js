angular.module('BasicInstagram').config(function($routeProvider) {
	$routeProvider
	.when('/myinstagram', {
		templateUrl: '../assets/templates/test.html'
	})

	.otherwise({redirectTo: '/myinstagram'});
})