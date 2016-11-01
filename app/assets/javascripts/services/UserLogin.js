angular.module("BasicInstagram").factory('UserLogin', function UserloginFactory($resource) {
  console.log("Load UserLogin");

  return {
    userName: '',
    isLogged: false,
    avatar: '',
    rememberMe: false,
    userLoginService: $resource('/users/checkUserLogin')
  }
});
