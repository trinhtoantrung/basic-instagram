angular.module("BasicInstagram").filter("CategoryImageFilter", function(){
	return function(images, category) {
		var newImages = [];

		if (category) {
			if (category === "All") {
				return images;
			}

			for (var i=0; i<images.length; i++) {
				if (images[i].category === category) {
					newImages.push(images[i]);
				}
			}
			return newImages;
		} else {
			return images;
		}
	};
});
