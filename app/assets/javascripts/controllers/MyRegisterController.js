angular.module('BasicInstagram').controller('MyRegisterController',
	function($scope, $http, $location, User, FileUpload){
	console.log("Load MyRegisterController");

	$scope.countries = [];
	$scope.registrationData = new User();
  $scope.isSubmitting = false;

  	var avatar = "test";

	$http({
		method: 'GET',
		url: '../assets/json/countries.json'
	}).then(function success(response) {
		console.log("Load countries - success")
		$scope.countries = response.data;
	}, function error(response) {

	});

// Test
	$scope.uploadFile = function(){
       var file = $scope.myFile;

       console.log('file is ' );
       console.dir(file);

			 var userName = "trung";
			 var timestamp = new Date().getUTCMilliseconds();

       FileUpload.uploadFileToUrl(file, userName, timestamp);
    };

	$scope.submitRegister = function(registrationData) {


		if ($scope.myFile) {
			var timestamp = new Date().getUTCMilliseconds();
			registrationData.avatar = "./uploads/" + registrationData.userName + "_" +
				timestamp;
		}

		console.log("Submit registration form", registrationData);

		// $scope.isSubmitting = true;
		//
    // registrationData.$save().then(function() {
    // 	$location.path("/myinstagram");
    // }).finally(function () {
    // 	$scope.isSubmitting = false;
    // });
	}

})
