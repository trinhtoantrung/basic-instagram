angular.module('BasicInstagram').directive('filemode', function($parse){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
		  	var model = $parse(attrs.filemode);
		  	var modelSetter = model.assign;
		  
		  	element.bind('change', function(){
		    scope.$apply(function(){
		        modelSetter(scope, element[0].querySelector('input').files[0]);
		    });
		  });
		}
	};
});