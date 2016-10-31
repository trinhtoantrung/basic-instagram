angular.module("BasicInstagram").controller("MyProfileController", function($scope, UserLogin, $location, User) {
	console.log("Load MyProfileController");

	$scope.userProfile = User.get({key: 'userName', value: UserLogin.userName});

	console.log($scope.userProfile)
});