angular.module('BasicInstagram').directive('biNavigationBar', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/directives/bi-navigation-bar.html",
		controller: function($scope, UserLogin, $location) {
			console.log("Controller of navigation bar is loaded");

			$scope.logout = function() {
				UserLogin.userName = '';
				UserLogin.isLogged = false;
				UserLogin.avatar = '';
				UserLogin.rememberMe = false;
				console.log("Logout - DONE");

				$location.path('/myinstagram/login');
			};
		}
	}
});