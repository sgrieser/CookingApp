'use strict';

/* Controllers */

var phonecatApp = angular.module('iCookingApp', []);

phonecatApp.controller('CookingRecipesController', function($scope) {
  $scope.recipes = [
    {'name': 'Käsespätzle',
     'snippet': 'Natürlich schwäbisch gemacht.',
     'duration': 1.5},
    {'name': 'Pizza',
     'snippet': 'Nur mit Salami und Wurst.',
     'duration' : 0.5}
  ];
  
  $scope.orderProp = 'duration';
  
});
