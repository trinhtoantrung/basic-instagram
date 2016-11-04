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
		console.log("author ", pComment.author);
		for (var i=0; i<pUsers.length; i++) {
			console.log("userName ", pUsers[i].userName);

			if (pUsers[i].userName === pComment.author){
				console.log(pUsers.avatar)
				return pUsers[i].avatar;
			}
		}

		return "../assets/styles/img/avatar.png";
	}
});
