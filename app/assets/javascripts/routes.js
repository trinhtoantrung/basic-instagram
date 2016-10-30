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

	.when('/myinstagram/login', {
		templateUrl: '../assets/templates/login/login.html',
		controller: 'MyLoginController'
	})

	.otherwise({redirectTo: '/myinstagram'});
}).run(function($rootScope, UserLogin, $location) {
	$rootScope.$on("$routeChangeStart", function(event) {
		console.log("Checking user login - isLogged", UserLogin.isLogged);
		if (!UserLogin.isLogged) {
			$location.path('myinstagram/login');
		} else {
			$location.path('myinstagram');
		}
	});
});
