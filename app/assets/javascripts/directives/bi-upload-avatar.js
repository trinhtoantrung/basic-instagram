angular.module('BasicInstagram').directive('biUploadAvatar', function ($compile) {
	return {
		replace: true,
		restrict: "E",
		scope: {
			imgurl:"@"
		},
		templateUrl: "../assets/templates/directives/bi-upload-avatar.html",
		link: function(scope, element, attrs) {
			element.on("change", function() {
				var file = element[0].querySelector('input').files[0];
				var reader  = new FileReader();

				reader.addEventListener("load", function () {
					attrs.$set('imgurl', reader.result);
        			$compile(element)(scope);
				}, false);

				if (file) {
				    reader.readAsDataURL(file);
				}
			});
		}
	}
});