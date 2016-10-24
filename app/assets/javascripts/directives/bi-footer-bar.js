angular.module('BasicInstagram').directive('biFooterBar', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/directives/bi-footer-bar.html"
	}
});