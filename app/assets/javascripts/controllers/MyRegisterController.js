angular.module('BasicInstagram').controller('MyRegisterController',
	function($scope, $http, $location, User, FileUpload, UserLogin){
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

       var timestamp = new Date().getTime();

       var fileName = "avatar_test_" + timestamp + ".jpg";
       FileUpload.uploadFileToUrl(file, fileName, "avatar");

       fileName = "image_test_" + timestamp + ".jpg";
       FileUpload.uploadFileToUrl(file, fileName, "image");

    };

	$scope.submitRegister = function() {
		if ($scope.myFile) {
			console.log("Upload avatar")
			var timestamp = new Date().getTime();
			$scope.registrationData.avatar = "/avatars/" + $scope.registrationData.userName + "_" +
				timestamp + ".jpg";

			FileUpload.uploadFileToUrl($scope.myFile, $scope.registrationData.avatar, "avatar");
		}

		console.log("Submit registration form", $scope.registrationData);

		$scope.isSubmitting = true;
		console.log($scope.registrationData.avatar);

	    $scope.registrationData.$save().then(function() {
	    }).finally(function () {
	    	$scope.isSubmitting = false;
	    	$location.path("/myinstagram/login");
	    });
	}

})
