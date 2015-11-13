'use strict';

/* Controllers */

var iCookingControllers = angular.module('RecipeDetail', []).

controller('RecipesDetailController', ['$scope', '$routeParams', '$http', 'RecipeFactory',
                                                   function($scope, $routeParams, $http, RecipeFactory) {

	
	$scope.recipe = RecipeFactory.get({id: $routeParams.recipeId});
	
	$scope.getImageUrl = function(imageUrl) {
	      return 'http://192.168.0.14:9000/assets/images/recipes/' + imageUrl
	};
	
	console.log("received:" + $scope.recipe)

   }]);