angular.module('BasicInstagram').controller('MyImageDetailController', function($scope, $routeParams, UserLogin, Image, User) {
	console.log("Load MyImageDetailController");

	$scope.image = new Image();
	var data = $scope.image.getService().get({"key": "date", "value": $routeParams.date}, function (){
		$scope.image = new Image(data);
	});

	$scope.users = User.query(function() {
	});

	$scope.userLogin = [];
	$scope.userLogin.userName = UserLogin.userName;

	$scope.getAvatarUrl = function(pComment, pUsers) {
		for (var i=0; i<pUsers.length; i++) {
			if (pUsers[i].userName === pComment.author){
				return pUsers[i].avatar;
			}
		}
		return "/avatars/avatar.png";
	}

	$scope.addNewComment = function() {
		console.log($scope.newCommentContent);
	}
});
