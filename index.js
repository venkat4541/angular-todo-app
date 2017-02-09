var appX = angular.module('mainApp', []);

// Controller
appX.controller('app', function($scope) {

  $scope.tasks = [];
  $scope.task="";

// Local Storage
  var taskData = localStorage['tasksList'];
  if(taskData !== undefined) {
    $scope.tasks = JSON.parse(taskData);
  }

  $scope.taskEnter = function() {
    if(event.which == 13 && $scope.task != "") {
      $scope.addTask();
    }
  };

  $scope.addTask = function() {
    $scope.tasks.push({'taskName': $scope.task,
     'taskDone': 'false'});
    $scope.task="";
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
    document.getElementsByClassName('clear').disabled = false;
  };

  $scope.taskEdit = function(name) {
    for (var i = 0; i < $scope.tasks.length; i++) {
      if($scope.tasks[i].taskName == name) {
        $scope.tasks[i].taskName = event.target.innerText;
      }
    }
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
      console.log(localStorage);
    event.target.contentEditable =
      event.target.contentEditable == "false" ? "true" : "false";
  };

  $scope.editDone = function(name) {
    if(event.which == 13 && name != "") {
      $scope.taskEdit(name);
    }
  };

  $scope.boxChanged = function(name, done) {
    for (var i = 0; i < $scope.tasks.length; i++) {
      if($scope.tasks[i].taskName == name) {
        $scope.tasks[i].taskDone = done;
      }
    }
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
  };

  $scope.cleared = function() {
    $scope.tasks = [];
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
    event.target.disabled = true;
  }

});
