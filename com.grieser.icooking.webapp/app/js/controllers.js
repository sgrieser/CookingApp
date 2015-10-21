'use strict';

/* Controllers */

var iCookingControllers = angular.module('iCookingControllers', []);

iCookingControllers.controller('CookingRecipesController', ['$scope', '$http', '$resource',
                                                            function ($scope, $http, $resource) {
	
	$http.defaults.useXDomain = true;
	var RecipesRESTfulService = $resource('http://localhost:9000/recipes');
	
	$scope.recipes = RecipesRESTfulService.query();
	console.log("received:" + $scope.recipes)
	$scope.orderProp = 'duration';
	
	$scope.getImageUrl = function(imageUrl) {
	      return 'http://localhost:9000/assets/images/recipes/' + imageUrl
	};
}]);

iCookingControllers.controller('CookingRecipesDetailController', ['$scope', '$routeParams', '$http', '$resource',
                                                   function($scope, $routeParams, $http, $resource) {

	$http.defaults.useXDomain = true;
	var RecipesRESTfulService = $resource('http://localhost:9000/recipes/' + $routeParams.recipeId);
	
	$scope.recipe = RecipesRESTfulService.get();
	
	$scope.getImageUrl = function(imageUrl) {
	      return 'http://localhost:9000/assets/images/recipes/' + imageUrl
	};
	
	console.log("received:" + $scope.recipe)

   }]);