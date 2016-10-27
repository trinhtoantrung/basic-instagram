angular.module('BasicInstagram').factory('User', function UserFactory ($resource){
	return $resource('/users/:key/:value');
})
