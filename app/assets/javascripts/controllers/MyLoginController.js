angular.module("BasicInstagram").controller("MyLoginController", function($scope, UserLogin, $location, $cookies) {
  console.log("MyLoginController loaded");

  console.log((new Date()).getTime());

  $scope.loginError = false;
  $scope.rememberMe = false;

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

        if ($scope.rememberMe) {
          $cookies.putObject("userLogin", UserLogin);
        }
  			$location.path("/myinstagram");
  		} else {
  			$scope.loginError = true;
  		}

  	});
  }
});
