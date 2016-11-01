angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location, Image, UserLogin
	, Categories){
	console.log("Load MyInstagramController");

	$scope.images = [];
	$scope.search = {};

	$scope.categories = Categories.data;
	$scope.category = "All";

	$scope.sorts = [["category", "ASC"], ["category", "DESC"], ["date", "ASC"], ["date", "DESC"]];
	$scope.sort = $scope.sorts[0];

	$scope.chooseCategory = function(pCategory) {
		$scope.category = pCategory;
	}

	var data = new Image().getService().query(function() {
		for (var i=0; i < data.length; i++) {
			var image = new Image(data[i]);
			$scope.images.push(image);
		}
	});

})
