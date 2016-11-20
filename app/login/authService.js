/**
 * Created by Margot on 20/11/2016.
 */

angular.module('myApp.authService', [])
  .factory('authService', authService);

authService.$inject = ['$state', '$rootScope'];

function authService($state,$rootScope) {
  let userRegistered = {username: 'george', password: 'clooney'};
  let isAuthenticated = false;

  return service = {
    login: login,
    user: userRegistered,
    isAuthenticated: isAuthenticated
  };

  // user = { username, password }
  function login(user) {

    if (user.username === userRegistered.username
      && user.password === userRegistered.password) {
      loginComplete();
      $state.go('navBar');
    } else {
      loginFailed();
    }
  }

  function loginComplete() {
    isAuthenticated = true;
  }

  function loginFailed() {
    $rootScope.$broadcast('loginFailed');
    console.log("Error : login failed");
  }
}
