angular.module('BasicInstagram').controller('MyRegisterController',
	function($scope, $http, $location, User, FileUpload, UserLogin){
	console.log("Load MyRegisterController");

	console.log(UserLogin.userName);
	UserLogin.userName = "register";

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

	$scope.submitRegister = function() {
		if ($scope.myFile) {
			console.log("Upload avatar")
			var timestamp = new Date().getUTCMilliseconds();
			$scope.registrationData.avatar = "/images/" + $scope.registrationData.userName + "_" +
				timestamp + ".jpg";

			FileUpload.uploadFileToUrl($scope.myFile, $scope.registrationData.userName, timestamp);
		}

		console.log("Submit registration form", $scope.registrationData);

		$scope.isSubmitting = true;
		console.log($scope.registrationData.avatar);

	    $scope.registrationData.$save().then(function() {
	    	$location.path("/myinstagram/login");
	    }).finally(function () {
	    	$scope.isSubmitting = false;
	    });
	}

})
