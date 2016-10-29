angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location){
	console.log("Load MyInstagramController");

	// load userInfo, check, validate

	/*if ($scope.userInfo == null | $scope.userInfo == undefined) {
		$location.path("/myinstagram/register");
	}*/


		// $scope.uploadPic = function(file) {
		// 	console.log("upload pic");
		// 	console.log(file);
		// 	file.upload = Upload.upload({
	  //     url: 'http://localhost:8383/fileupload',
	  //     data: {file: file}
	  //   });
		//
		// 	file.upload.then(function (response) {
		// 		$timeout(function () {
		// 			file.result = response.data;
		// 		});
		// 	}, function (response) {
		// 		if (response.status > 0)
		// 			$scope.errorMsg = response.status + ': ' + response.data;
		// 	}, function (evt) {
		// 		// Math.min is to fix IE which reports 200% sometimes
		// 		file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		// 	});
		// };
})
