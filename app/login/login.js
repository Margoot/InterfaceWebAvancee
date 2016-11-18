/**
 * Created by Margot on 16/11/2016.
 */

'use strict';

angular.module('myApp.login', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', [ 'authService', '$scope', function( auth, $scope ) {



    }]);