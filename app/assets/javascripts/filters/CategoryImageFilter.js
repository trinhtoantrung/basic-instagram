angular.module("BasicInstagram").filter("CategoryImageFilter", function(){
	return function(images, category) {
		var newImages = [];

		console.log(category);

		if (category) {
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