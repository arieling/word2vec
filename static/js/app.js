'use strict';   // See note about 'use strict'; below

var myApp = angular.module('myApp', [
 'ngRoute',
]);


myApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/', {
                 templateUrl: '/static/partials/index.html',
             }).
             when('/about', {
                 templateUrl: '../static/partials/about.html',
             }).
             otherwise({
                 redirectTo: '/'
             });
    }]);



myApp.controller('ExampleController', ['$scope','$http', function($scope,$http) {
      $scope.master = {};

    $scope.submit = function(info) {
        $http({
                user: "admin:admin",
                method: 'GET',
                url: '/articles/' + info.source+'/' + info.to +'/'+ info.predict,
                headers: {'Content-Type': 'application/json'}
            }).success(function (result) {
                $scope.result = result;
            });
      };


      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);