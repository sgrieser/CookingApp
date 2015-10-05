'use strict';

/* App Module */

var iCookingApp = angular.module('iCookingApp', [
  'ngRoute',
  'iCookingControllers',
  'iCookingFilters'
]);

iCookingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
        templateUrl: 'partials/recipe-list.html',
        controller: 'CookingRecipesController'
      }).
      when('/recipes/:recipeId', {
        templateUrl: 'partials/recipe-detail.html',
        controller: 'CookingRecipesDetailController'
      }).
      otherwise({
        redirectTo: '/recipes'
      });
  }]);