angular.module('BasicInstagram').directive('biRegistrationForm', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/register/registration-form.html"
	}
});