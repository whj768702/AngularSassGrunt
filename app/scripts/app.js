'use strict';

/**
 * @ngdoc overview
 * @name angularSassGruntApp
 * @description
 * # angularSassGruntApp
 *
 * Main module of the application.
 */
var app = angular.module('angularSassGruntApp', ['ngResource','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


