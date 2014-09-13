'use strict';

angular.module('angularTestApp')
.controller('MainCtrl', function ($scope) {
  $scope.items = [
    { id: 1, title: 'test1', content: 'content1' },
    { id: 2, title: 'test2', content: 'content2' },
    { id: 3, title: 'test3', content: 'content3' },
  ];

  $scope.select = function(item) { $scope.selectedItem = item;  };
  $scope.isSelect = function(item) { return $scope.selectedItem === item; };
  $scope.select($scope.items[0]);
});
