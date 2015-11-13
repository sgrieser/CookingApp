'use strict';

/* Controllers */

var recipeList = angular.module('RecipeList', []).

controller('RecipeListController', ['$scope', '$http', 'RecipesFactory',
                                                            function ($scope, $http, RecipesFactory) {
	
	// get list of recipes from REST service
	$scope.recipes = RecipesFactory.query();
	

	// filter:
	$scope.orderProp = 'duration';
	
	// help ferunction to get an image
	$scope.getImageUrl = function(imageUrl) {
	      return 'http://192.168.0.14:9000/assets/images/recipes/' + imageUrl
	};


	// empty object to collect settings for new recipe
	$scope.newRecipe = {}; 

	$scope.saveNewRecipe = function() {

		RecipesFactory.create($scope.newRecipe);
	};


}]);

