var app = angular.module('mainApp', []);
 
 app.controller('EmployeeCtrl', function($scope, $http) {
 	$http.get('data.json').then(function(res){
		$scope.data = res.data;
 	});
});
 
app.directive('donation', function() {
  return {
    templateUrl: 'donate_template.html'
  };
});