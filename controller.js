var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(data){
  		console.log(data);
  		$scope.users = data.data.data;
  		// console.log()
  	});
  };


  $scope.getUsers();

});