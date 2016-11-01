angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location, Image, UserLogin){
	console.log("Load MyInstagramController");

	$scope.images = [];
	$scope.search = {};
	$scope.isAllSearch = true;
	$scope.isCategorySearch = false;
	$scope.isAuthorSearch = false;
	$scope.searchField = "All"

	$scope.searchAll = function() {
		console.log("search all");
		$scope.isAllSearch = true;
		$scope.isCategorySearch = false;
		$scope.isAuthorSearch = false;
		$scope.searchField = "All";
	};

	$scope.searchCategory = function() {
		console.log("search category");
		$scope.isAllSearch = false;
		$scope.isCategorySearch = true;
		$scope.isAuthorSearch = false;
		$scope.searchField = "Category";
	};

	$scope.searchAuthor = function() {
		console.log("search author");
		$scope.isAllSearch = false;
		$scope.isCategorySearch = false;
		$scope.isAuthorSearch = true;
		$scope.searchField = "Author";
	};

	var data = new Image().getService().query(function() {
		for (var i=0; i < data.length; i++) {
			var image = new Image(data[i]);
			$scope.images.push(image);
		}
	});

})
