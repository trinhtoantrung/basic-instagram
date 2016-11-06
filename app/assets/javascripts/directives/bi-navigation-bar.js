angular.module('BasicInstagram').directive('biNavigationBar', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/directives/bi-navigation-bar.html",
		controller: function($scope, UserLogin, $location, $cookies) {
			console.log("Controller of navigation bar is loaded");

			console.log(UserLogin);

			$scope.isLogged = function() {
				// console.log("isLogged ", UserLogin);
				return UserLogin.isLogged;
			}

			$scope.userName = function() {
				return (UserLogin.isLogged)?"|| " + UserLogin.userName:"";
			}

			$scope.logout = function() {
				UserLogin.userName = '';
				UserLogin.isLogged = false;
				UserLogin.avatar = '';
				UserLogin.rememberMe = false;
				console.log("Logout - DONE");

				console.log($cookies.getObject("userLogin"));
				$cookies.remove("userLogin");
				console.log($cookies.getObject("userLogin"));

				$location.path('/myinstagram/login');
			};
		}
	}
});
