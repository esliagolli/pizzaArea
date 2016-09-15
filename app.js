/**
 * Created by crs on 8/28/16.
 */

var pizzaareaApp = angular.module('pizzaareaApp', ['ui.router']);

pizzaareaApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================

        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'pareaController'
        })

});

pizzaareaApp.controller('pareaController', function ($scope) {
   
    $scope.area = function () {

        var radius = parseInt($scope.x) / 2;

        console.log(radius);

        if (radius > 0)
        {
            return radius * radius * Math.PI;
        }

        else if (radius <= 0) {

            alert('Hey dude are you getting that pizza or not ! :P');
        }

    }

});
