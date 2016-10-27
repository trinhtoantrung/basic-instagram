angular.module('BasicInstagram').directive('checkemail', function($q, $timeout, User) {
	return {
	    require: 'ngModel',
	    link: function(scope, elm, attrs, ctrl) {

	      ctrl.$asyncValidators.checkemail = function(modelValue, viewValue) {

	        if (ctrl.$isEmpty(modelValue)) {
	          // consider empty model valid
	          return $q.when();
	        }

	        console.log("Check email");
	        var user = User.get({key: 'email', value: modelValue});

	        var def = $q.defer();

	        $timeout(function() {
	          if(JSON.stringify(user) == "{}") {
	          	// userName is available
	          	def.resolve();
	          } else {
	          	def.reject();
	          }

	        }, 2000);

	        return def.promise;
	      };
	    }
  	};
});