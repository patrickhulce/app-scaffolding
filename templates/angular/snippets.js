angular.module('lists.directive', []).
  controller('ListCtrl', ['$scope', function ($scope) {
    $scope.data = {};
  }]).
  directive('my-list', function () {
    return {

    };
  });