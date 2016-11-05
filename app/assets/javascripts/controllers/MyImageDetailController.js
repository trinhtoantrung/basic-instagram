angular.module('BasicInstagram').controller('MyImageDetailController', function($scope, $location, $routeParams, UserLogin, Image, User) {
	console.log("Load MyImageDetailController");

	$scope.image = new Image();
	var data = $scope.image.getService().get({"key": "date", "value": $routeParams.date}, function (){
		$scope.image = new Image(data);
	});

	$scope.users = User.query(function() {
	});

	$scope.userLogin = [];
	$scope.userLogin.userName = UserLogin.userName;
	$scope.userLogin.avatar = UserLogin.avatar;

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

		var newComment = new Comment();
		newComment.author = UserLogin.userName;
		newComment.content = $scope.newCommentContent;
		newComment.date = new Date().getTime();
		console.log("new comment - ", newComment);
		$scope.image.comments.push(newComment);
		console.log($scope.image);

	 	$scope.image.getService().update($scope.image).$promise.then(function(result){
			console.log(result);
			$scope.newCommentContent = "";
		});

	}

	$scope.dislike = function(image) {
		console.log(image);
		console.log(UserLogin.userName);
		var exist = false;
		var pIndex = undefined;

		for (var i=0; i<image.dislikes.length; i++) {
			if (image.dislikes[i] === UserLogin.userName) {
				exist = true;
				pIndex = i;
				break;
			}
		}

		if (exist) {
			image.dislikes.splice(pIndex, 1);
		} else {
			image.dislikes.push(UserLogin.userName);
		}

		// call API for updating here
		image.getService().update(image).$promise.then(function(result){
			console.log(result);
		});
	}

	$scope.like = function(image) {
		console.log(image);
		console.log(UserLogin.userName);
		var exist = false;
		var pIndex = undefined;

		for (var i=0; i<image.likes.length; i++) {
			if (image.likes[i] === UserLogin.userName) {
				exist = true;
				pIndex = i;
				break;
			}
		}

		if (exist) {
			image.likes.splice(pIndex, 1);
		} else {
			image.likes.push(UserLogin.userName);
		}

		// call API for updating here
		image.getService().update(image).$promise.then(function(result){
			console.log(result);
		});
	}
});
