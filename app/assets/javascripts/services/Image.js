angular.module("BasicInstagram").factory("Image", function ImageFactory($resource){
	console.log("Load ImageFactory");

	var serviceUrl = "/images"

	Image = function(imageData) {
		if(imageData) {
			this.url = imageData.url;
			this.author = imageData.author;
			this.title = imageData.title;
			this.category = imageData.category;
			this.date = imageData.date;
			this.likes = imageData.likes;
			this.dislikes = imageData.dislikes;
			this.comments = imageData.comments;
		} else {
			this.url = "";
			this.author = "";
			this.title = "";
			this.category = "";
			this.date = null;
			this.likes = [];
			this.dislikes = [];
			this.comments = [];
		}
		
	};

	Image.prototype.getService  = function() {
		return $resource("/images");
	}

	Image.prototype.countLikes = function() {
		return this.likes.length;
	}

	Image.prototype.countDislikes = function() {
		return this.dislikes.length;
	}

	return Image;
});