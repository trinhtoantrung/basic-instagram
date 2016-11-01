angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location, Image, UserLogin){
	console.log("Load MyInstagramController");

	$scope.images = [];
	$scope.search = {};

	var data = new Image().getService().query(function() {
		for (var i=0; i < data.length; i++) {
			var image = new Image(data[i]);
			image.url = data[i].url;
			$scope.images.push(image);
		}
	});
})
