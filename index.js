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
  };

  $scope.taskEdit = function() {
    console.log(event.target.contentEditable);
    event.target.contentEditable =
      event.target.contentEditable == "false" ? "true" : "false";
    console.log(event.target.contentEditable);
  };

  $scope.editDone = function(name) {
    if(event.which == 13 && name != "") {
      $scope.taskEdit();
    }

  };
});
