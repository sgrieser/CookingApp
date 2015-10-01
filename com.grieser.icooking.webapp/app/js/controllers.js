'use strict';

/* Controllers */

var phonecatApp = angular.module('iCookingApp', []);

phonecatApp.controller('CookingRecipesController', function($scope) {
  $scope.recipes = [
    {'name': 'Käsespätzle',
     'snippet': 'Natürlich schwäbisch gemacht.'},
    {'name': 'Pizza',
     'snippet': 'Nur mit Salami und Wurst.'}
  ];
});
