'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'ui.router',
  'myApp.profile',
  'myApp.view2',
  'myApp.view1',
  'myApp.view2',
  'myApp.login',
  'myApp.version',
]).config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
  function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('view2', {
        url: '/view2',
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
      .state('/login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      });
  }]);
