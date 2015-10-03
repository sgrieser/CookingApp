'use strict';

/* Controllers */

var iCookingApp = angular.module('iCookingApp', []);

iCookingApp.controller('CookingRecipesController', ['$scope', '$http', function ($scope, $http) {
	$http.get('recipes/recipes.json').success(function(data) {
		$scope.recipes = data;
	});

	$scope.orderProp = 'duration';
}]);
