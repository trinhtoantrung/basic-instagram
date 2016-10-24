angular.module('BasicInstagram').directive('biNavigationBar', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/directives/bi-navigation-bar.html"
	}
});