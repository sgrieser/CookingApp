'use strict';

/* jasmine specs for controllers go here */

describe('CookingRecipesController', function() {

	var scope, ctrl;
	
	beforeEach(module('iCookingApp'));
	
	beforeEach(inject(function($controller) {
	      scope = {};
	      ctrl = $controller('CookingRecipesController', {$scope:scope});
	}));
	
	it('should create "recipes" model with 2 recipes', function() {
      expect(scope.recipes.length).toBe(2);
    });
	
	  it('should set the default value of orderProp model', function() {
	      expect(scope.orderProp).toBe('duration');
	    });
});
