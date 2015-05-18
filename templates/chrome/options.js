angular.module('options', ['ui.bootstrap'])
  .controller('OptionsCtrl', ['$scope', function ($scope) {
    $scope.data = {};

    $scope.save = function () {
      chrome.sync.set('options', $scope.data);
    };
  }]);