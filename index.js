var appX = angular.module('mainApp', []);

// Controller
appX.controller('app', function($scope) {
  $scope.tasks = [];
  $scope.task="";
  $scope.searchEnter = function() {
    if(event.which == 13 && $scope.task != "") {
      $scope.addTask();
    }
  };

  $scope.addTask = function() {
    $scope.tasks.push({'taskName': $scope.task,
     'taskDone': 'false'});
    console.log($scope.tasks);
    $scope.task="";
  }
});
