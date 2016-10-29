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

	$scope.uploadFile = function(){
       var file = $scope.myFile;

       console.log('file is ' );
       console.dir(file);

       var uploadUrl = "http://localhost:8383/fileupload";
       FileUpload.uploadFileToUrl(file, uploadUrl);
    };

	$scope.submitRegister = function(registrationData) {
		console.log("Submit registration form", registrationData);

		$scope.isSubmitting = true;

	    registrationData.$save().then(function() {
	    	$location.path("/myinstagram");
	    }).finally(function () {
	    	$scope.isSubmitting = false;
	    });
	}

})
