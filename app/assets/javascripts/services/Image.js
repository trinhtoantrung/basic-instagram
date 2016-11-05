angular.module("BasicInstagram").factory("Image", function ImageFactory($resource, Comment){
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

			this.comments = [];
			for (var i=0; i<imageData.comments.length; i++) {
				this.comments.push(new Comment(imageData.comments[i]));
			}

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
		return $resource('/images', null, {
			'update': {method: 'PUT'}
		});
	}

	Image.prototype.countLikes = function() {
		return this.likes.length;
	}

	Image.prototype.countDislikes = function() {
		return this.dislikes.length;
	}

	return Image;
});
