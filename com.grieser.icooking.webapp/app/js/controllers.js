'use strict';

/* Controllers */

var iCookingControllers = angular.module('iCookingControllers', []);

iCookingControllers.controller('CookingRecipesController', ['$scope', '$http', 
                                                            function ($scope, $http) {
	$http.get('recipes/recipes.json').success(function(data) {
		$scope.recipes = data;
	});

	$scope.orderProp = 'duration';
}]);

iCookingControllers.controller('CookingRecipesDetailController', ['$scope', '$routeParams', '$http',
                                                   function($scope, $routeParams, $http) {
     $http.get('recipes/' + $routeParams.recipeId + '.json').success(function(data) {
       $scope.recipe = data;
     });
   }]);