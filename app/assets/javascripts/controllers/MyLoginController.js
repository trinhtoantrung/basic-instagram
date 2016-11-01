angular.module("BasicInstagram").controller("MyLoginController", function($scope, UserLogin, $location) {
  console.log("MyLoginController loaded");

  console.log((new Date()).getTime());

  $scope.loginError = false;

  $scope.login = function() {
  	console.log("Try to login");
  	console.log($scope.data);
  	console.log($scope.rememberMe);

  	UserLogin.userLoginService.get($scope.data, function(user) {

  		if(user.userName) {
  			console.log("Login successfully");
  			UserLogin.userName = user.userName;
  			UserLogin.isLogged = true;
        UserLogin.avatar = user.avatar;
  			UserLogin.rememberMe = $scope.rememberMe;

        console.log(UserLogin);

  			$location.path("/myinstagram");
  		} else {
  			$scope.loginError = true;
  		}

  	});
  }
});
