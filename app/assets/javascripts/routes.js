angular.module('BasicInstagram').config(function($routeProvider) {
	$routeProvider
	.when('/myinstagram', {
		templateUrl: '../assets/templates/index.html',
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

	.when('/myinstagram/profile', {
		templateUrl: '../assets/templates/profile/profile.html',
		controller: 'MyProfileController',
		access: false
	})

	.when('/myinstagram/upload', {
		templateUrl: '../assets/templates/upload/upload.html',
		controller: 'MyUploadController',
		access: false
	})

	.when('/myinstagram/:date', {
		templateUrl: '../assets/templates/image/imageDetail.html',
		controller: 'MyImageDetailController',
		access: false
	})

	.otherwise({redirectTo: '/myinstagram'});

}).run(function($rootScope, UserLogin, $location, $cookies) {
	$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {

		console.log(UserLogin);

		// console.log("Checking user login - isLogged", UserLogin.isLogged);
		// console.log("Next route access", nextRoute.access);
		// if (!UserLogin.isLogged && nextRoute.access === false) {
		// 	console.log("Go to login page");
		// 	event.preventDefault();
		// 	$location.path('/myinstagram/login');
		// }

		if (data = $cookies.getObject('userLogin')) {
			console.log('saved login user in cookied before');
			UserLogin.userName = data.userName;
			UserLogin.isLogged = data.isLogged;
			UserLogin.avatar = data.avatar;
			UserLogin.rememberMe = data.rememberMe;
		} else if (UserLogin.isLogged) {
			console.log("User login is logged without rememberme");
		} else {
				if (nextRoute.access) {
					
				} else {
					console.log("Go to login page");
					$location.path('/myinstagram/login');
				}
		}
	});
});
