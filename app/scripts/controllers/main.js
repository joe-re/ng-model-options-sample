'use strict';

angular.module('angularTestApp')
.controller('MainCtrl', function ($scope) {
  $scope.items = [
    { id: 1, title: 'test1', content: 'content1' },
    { id: 2, title: 'test2', content: 'content2' },
    { id: 3, title: 'test3', content: 'content3' },
  ];

  $scope.select = function(item) { $scope.selectedItem = angular.copy(item);  };
  $scope.isSelect = function(item) { return $scope.selectedItem.id === item.id; };
  $scope.save = function() {
    angular.forEach($scope.items, function(item, i) {
      if (item.id === $scope.selectedItem.id) {
        $scope.items[i] = angular.copy($scope.selectedItem);
      }
    });
  };

  $scope.select($scope.items[0]);
});
