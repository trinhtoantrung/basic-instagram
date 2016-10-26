angular.module('BasicInstagram').controller('MyRegisterController', function($scope, $http, $location){
	console.log("Load MyRegisterController");

	$scope.countries = [];

	$http({
		method: 'GET',
		url: '../assets/json/countries.json'
	}).then(function success(response) {
		console.log("Load countries - success")
		$scope.countries = response.data;
	}, function error(response) {

	});

	// TODO: should using new instance
	$scope.registrationData = {}
	$scope.submitRegister = function(registrationData) {
		console.log("Submit registration form", registrationData);

		// save note using factory and back to main
		$location.path("/myinstagram");
	}
})