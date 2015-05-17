angular.module('items', ['ngRoute', 'ui.bootstrap', 'ui.sortable']).
  controller('ItemCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
    $scope.data = {};
    $scope.item = new Item($routeParams.itemId);
  }]).
  directive('my-list', function () {
    return {
      templateUrl: 'partials/my-directive.html',
      /* replace, transclude, template */
      scope: {
        myData: '=myData'
        /* @myVar for literals */
        /* &myVar for functions */
      },
      link: function (scope, element, attrs) {
        element.find('.selector').myPlugin({
          param: scope.myData.option
        });
      }
    };
  }).
  factory('ItemModel', function () {
    var data = [];
    return {
      ALL: data,
      add: function (item) {
        data.push(item);
      },
      remove: function (id) {
        var index = _.findIndex(data, { id: id });
        data.splice(index, 1);
      }
    }
  }).
  filter('startAt', function () {
    return function (input, index) {
      return input.slice(parseInt(index, 10));
    };
  }).
  config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider.
        when('/Item/:itemId', {
          templateUrl: 'views/item.html',
          controller: 'ItemCtrl'
        });

      $locationProvider.html5Mode(true);
    }]);