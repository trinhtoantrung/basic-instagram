angular.module("BasicInstagram").controller("MyUploadController", function($scope, $location, UserLogin, Categories, 
		Image, FileUpload) {
	console.log("Load MyUploadController");

	$scope.categories = Categories.data;
	$scope.data = new Image();
	$scope.uploadError = false;
	$scope.uploadErrorMessage = [];
	$scope.isSubmitting = false;

	$scope.uploadImage = function() {
		console.log("try to upload image");

		$scope.uploadError = false;
		$scope.uploadErrorMessage = [];

		if (!$scope.imageFile) {
			$scope.uploadError = true;
			$scope.uploadErrorMessage.push("Choose a image for upload");
		}

		if ($scope.data.title === "") {
			$scope.uploadError = true;
			$scope.uploadErrorMessage.push("Fill your title");
		}

		if ($scope.data.category === "") {
			$scope.uploadError = true;
			$scope.uploadErrorMessage.push("Choose your category");
		}

		if (!$scope.uploadError) {
			$scope.isSubmitting = true;
			var timestamp = new Date().getTime();

			if ($scope.comment) {
				var commentObj = {"content": $scope.comment, "author": UserLogin.userName, "date": timestamp};
				$scope.data.comments.push(commentObj);
				console.log("Add comment: ", commentObj);
			}

			$scope.data.author = UserLogin.userName;
			$scope.data.date = timestamp;

			if ($scope.imageFile) {
				var fileName = UserLogin.userName + "_" + timestamp + ".jpg";
				$scope.data.url = "/images/" + UserLogin.userName + "_" + timestamp + ".jpg";
				console.log("Upload new image", $scope.data.url);
				console.log($scope.imageFile);
				FileUpload.uploadFileToUrl($scope.imageFile, fileName, "image");
			}

			$scope.data.getService().save($scope.data, function() {
				$scope.isSubmitting = false;
	    		$location.path("/myinstagram");
			});
		} else {
			console.log("Upload image..", $scope.uploadError, $scope.uploadErrorMessage);
		}
	}
});