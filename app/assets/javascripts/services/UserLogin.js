angular.module("BasicInstagram").factory('UserLogin', function UserloginFactory($resource) {
  console.log("Load UserLogin");

  return {
    userName: '',
    isLogged: false,
    avatar: '',
    rememberMe: false,
    urlService: 'http://localhost:8383',
    userLoginService: $resource('/users/checkUserLogin')
  }
});
