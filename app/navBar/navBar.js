/**
 * Created by Margot on 20/11/2016.
 */
'use strict';

angular.module('myApp.navBar', [])

  .controller('NavBarCtrl', ['$state', function ($state) {
    $state.go('navBar.profile');

  }]);