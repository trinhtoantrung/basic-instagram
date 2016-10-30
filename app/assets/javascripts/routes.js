angular.module('BasicInstagram').config(function($routeProvider) {
	$routeProvider
	.when('/myinstagram', {
		templateUrl: '../assets/templates/test.html',
		controller: "MyInstagramController",
		access: false
	})

	.when('/myinstagram/register', {
		templateUrl: '../assets/templates/register/register.html',
		controller: "MyRegisterController",
		access: true
	})

	.when('/myinstagram/login', {
		templateUrl: '../assets/templates/login/login.html',
		controller: 'MyLoginController',
		access: true
	})

	.otherwise({redirectTo: '/myinstagram'});
}).run(function($rootScope, UserLogin, $location) {
	$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
		console.log("Checking user login - isLogged", UserLogin.isLogged);
		console.log("Next route access", nextRoute.access);
		if (!UserLogin.isLogged && nextRoute.access === false) {
			console.log("Go to login page");
			event.preventDefault();
			$location.path('myinstagram/login');
		}
	});
});
