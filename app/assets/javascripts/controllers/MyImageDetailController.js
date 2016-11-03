angular.module('BasicInstagram').controller('MyImageDetailController', function($scope, $routeParams, UserLogin, Image, User) {
	console.log("Load MyImageDetailController");

	$scope.image = new Image();
	var data = $scope.image.getService().get({"key": "date", "value": $routeParams.date}, function (){
		$scope.image = new Image(data);
	});

	$scope.userLogin = [];
	$scope.userLogin.userName = UserLogin.userName;
});
