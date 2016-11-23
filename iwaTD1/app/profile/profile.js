/**
 * Created by Margot on 17/11/2016.
 */

'use strict';

angular.module('myApp.profile', [])

  .controller('ProfileCtrl', ['authService', '$scope', '$state', function (auth, $scope, $state) {
    let vm = $scope;
    vm.user = auth.user;
    vm.logout = function () {
      $state.go('login');
    };
    vm.alerts = [
      { type: 'success', msg: 'Login successful' }
    ];
    vm.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }]);