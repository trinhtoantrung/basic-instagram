angular.module('BasicInstagram').controller('MyInstagramController', function($scope, $http, $location, Image, UserLogin
	, Categories){
	console.log("Load MyInstagramController");

	$scope.images = [];
	$scope.lazyImages = [];
	$scope.search = {};

	$scope.categories = Categories.data;
	$scope.category = "All";

	$scope.sorts = [["NONE", "NONE"], ["category", "ASC"], ["category", "DESC"], ["date", "ASC"], ["date", "DESC"]];
	$scope.sort = $scope.sorts[0];
	$scope.sortBy = "+category";

	$scope.infiniteScrollDisable = true;

	$scope.chooseCategory = function(pCategory) {
		console.log("chooseCategory");
		$scope.category = pCategory;
		
		$scope.lazyImages = [];
		$scope.loadMore();
	}

	$scope.orderBy = function(sort) {
		console.log("orderBy");

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

	$scope.dislike = function(image) {
		console.log("dislike");

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
		console.log("like");

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

		if(data[0]) {
			$scope.lazyImages.push(new Image(data[0]));
		}

		if(data[1]) {
			$scope.lazyImages.push(new Image(data[1]));
		}
	});


	// just add more 2 items
  	$scope.loadMore = function() {
    	console.log("load more ..");

    	var addNumber = 0;
		for (var i=0; i<$scope.images.length; i++) {
			var addFlag = true;
			for (var j=0; j<$scope.lazyImages.length; j++) {
				if ($scope.images[i].url === $scope.lazyImages[j].url) {
					addFlag = false;
					break;
				}
			}

			if (addFlag && ($scope.category === "All" || $scope.images[i].category === $scope.category)) {
				addFlag = true;
			} else {
				addFlag = false;
			}

			if (addFlag && addNumber<2) {
				$scope.lazyImages.push($scope.images[i]);
				addNumber ++;
			}
		}
  };

	$scope.enableInfiniteScroll = function() {
		console.log("enable infinite scroll");
		$scope.loadMore();
	}

})
