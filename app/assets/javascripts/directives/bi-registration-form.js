angular.module('BasicInstagram').directive('biRegistrationForm', function() {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "../assets/templates/register/registration-form.html",
		link: function(scope, element, attrs) {

			scope.registrationData = {};	

			scope.submitRegister = function() {
				console.log("Submit register", scope.registrationData);

				// TODO: call ws here
			

				// Reset data and hide modal if success
				scope.registrationData = {};
				$('#registrationModal').modal('hide');
			}
		}
	}
});