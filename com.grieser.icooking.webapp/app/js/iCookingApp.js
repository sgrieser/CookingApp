'use strict';

/* App Module */

var iCookingApp = angular.module('iCookingApp', [
  'ngRoute',
  'ngResource',
  'RecipeDetail',
  'RecipeList',
  'iCookingFilters'
]);

iCookingApp.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
	
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
    $routeProvider.
      when('/recipes', {
        templateUrl: 'modules/recipe_list/recipe-list.html',
        controller:  'RecipeListController'
      }).
      when('/recipes/:recipeId', {
        templateUrl: 'modules/recipe_details/recipe-detail.html',
        controller:  'RecipesDetailController'
      }).
      otherwise({
        redirectTo: '/recipes'
      });
  }]);
