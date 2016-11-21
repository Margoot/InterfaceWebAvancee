'use strict';

angular.module('myApp.nespresso', ['ngRoute'])

.controller('NespressoCtrl',['authService','$scope', function (auth, $scope)  {
    let vm = $scope;
    vm.user = auth.user;
}]);