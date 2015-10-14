var app = angular.module('userProfiles');
app.controller('MainController', ['$scope', 'myService', function($scope,myService) {
	$scope.user = myService.getUsers();

}]);