angular.module('BasicInstagram').controller('MyImageDetailController', function($scope, $routeParams, UserLogin, Image) {
	console.log("Load MyImageDetailController");

	$scope.image = new Image();
	var data = $scope.image.getService().get({"key": "date", "value": $routeParams.date}, function (){
		$scope.image.url = data.url;
		$scope.image.author = data.author;
		$scope.image.title = data.title;
		$scope.image.category = data.category;
		$scope.image.date = data.date;
		$scope.image.likes = data.likes;
		$scope.image.dislikes = data.dislikes;
		$scope.image.comments = data.comments;
	});
});