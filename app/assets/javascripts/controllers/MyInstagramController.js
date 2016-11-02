angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location, Image, UserLogin
	, Categories){
	console.log("Load MyInstagramController");

	$scope.images = [];
	$scope.search = {};

	$scope.categories = Categories.data;
	$scope.category = "All";

	$scope.sorts = [["category", "ASC"], ["category", "DESC"], ["date", "ASC"], ["date", "DESC"]];
	$scope.sort = $scope.sorts[0];
	$scope.sortBy = "+category";

	$scope.chooseCategory = function(pCategory) {
		$scope.category = pCategory;
	}

	$scope.orderBy = function(sort) {
		$scope.sort = sort;
		if (sort) {
			if (sort[1] === "ASC") {
				$scope.sortBy = "+";
			} else {
				$scope.sortBy = "-";
			}

			if (sort[0] === "category") {
				$scope.sortBy += "category";
			} else {
				$scope.sortBy += "date";
			}
		}
	}


	// in this case, we are able to use the default comparator enough
	$scope.myOrderComparator = function(image1, image2) {
		if ($scope.sort[0] === "date") {
			return (image1.value.date < image2.value.date) ? -1 : 1;
		} else if ($scope.sort[0] === "category") {
			return (image1.value.category < image2.value.category) ? -1 : 1;
		}
	}

	var data = new Image().getService().query(function() {
		for (var i=0; i < data.length; i++) {
			var image = new Image(data[i]);
			$scope.images.push(image);
		}
	});

})
