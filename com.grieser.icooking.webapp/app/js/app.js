'use strict';

/* App Module */

var iCookingApp = angular.module('iCookingApp', [
  'ngRoute',
  'ngResource',
  'iCookingControllers',
  'iCookingFilters'
]);

iCookingApp.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
	
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
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