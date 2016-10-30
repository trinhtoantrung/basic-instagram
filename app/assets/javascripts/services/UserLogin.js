angular.module("BasicInstagram").factory('UserLogin', function UserloginFactory() {
  console.log("Load UserLogin");

  return {
    userName: '',
    isLogged: false
  }
});
