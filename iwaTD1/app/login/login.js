/**
 * Created by Margot on 16/11/2016.
 */

'use strict';

angular.module('myApp.login', [])

    .controller('LoginCtrl', [ 'authService', '$scope', function( auth, $scope ) {
      const vm = $scope;
      vm.login = function () {
        auth.login(vm.user);
      };
      vm.alerts = [];
      vm.closeAlert = function(index) {
        vm.alerts.splice(index, 1);
      };
      vm.addAlert = function() {
        vm.alerts.push({
          type: 'danger',
          msg: 'Login failed, the username or the password is wrong'
        });
      };
      vm.$on('loginFailed', function() {
        vm.addAlert();
      });
    }]);