angular.module("BasicInstagram").factory('UserLogin', function UserloginFactory($resource) {
  console.log("Load UserLogin");

  return {
    userName: '',
    isLogged: false,
    rememberMe: false,
    userLoginService: $resource('/users/checkUserLogin')
  }
});
