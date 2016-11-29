angular
  .module('udemyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login/github', {
        templateUrl: 'views/mens.html',
        controller: 'LoginCtrl'
      })
      .when('/login/facebook', {
        templateUrl: 'views/mens.html',
        controller: 'LoginCtrl'
      })
      .when('/mens.html', {
        templateUrl: 'views/mens.html',
        controller: 'MainCtrl'
      })
      .when('/womens.html', {
        templateUrl: 'views/womens.html',
        controller: 'MainCtrl'
      })
      .when('/cart.html', {
        templateUrl: 'views/carts.html',
        controller: 'CartCtrl'
      })
       .when('/pastorders.html', {
        templateUrl: 'views/pastorders.html',
        controller: 'OrderingCtrl'
      }) 
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });