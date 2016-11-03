angular.module("BasicInstagram").controller("MyProfileController", function($scope, $http, UserLogin, $location, User
	, FileUpload) {
	console.log("Load MyProfileController");

	$scope.countries = [];
	$scope.isSubmitting = false;

	User.get({key: 'userName', value: UserLogin.userName}).$promise.then(function(user) {
		$scope.userProfile = user;
		$scope.avatarUrl = $scope.userProfile["avatar"];
		console.log($scope.avatarUrl);
	});

	$http({
		method: 'GET',
		url: '../assets/json/countries.json'
	}).then(function success(response) {
		console.log("Load countries - success")
		$scope.countries = response.data;
	}, function error(response) {

	});

	$scope.updateProfile = function() {
		$scope.isSubmitting = true;
		if ($scope.myFile) {
			var timestamp = new Date().getTime();
			$scope.userProfile.avatar = "/avatars/" + $scope.userProfile.userName + "_" +
				timestamp + ".jpg";

			console.log("Upload new avatar", $scope.userProfile.avatar);
			FileUpload.uploadFileToUrl($scope.myFile, $scope.userProfile.avatar, "avatar");
		}

		console.log("Update profile..");
		console.log("Submit updateProfile form", $scope.userProfile);

	    $scope.userProfile.$update().then(function() {

	    }).finally(function () {
	    	$scope.isSubmitting = false;
	    	$location.path("/myinstagram");
	    });
	}
});
