'use strict';

/* jasmine specs for controllers go here */

describe('CookingRecipesController', function() {

	beforeEach(module('iCookingApp'));
	
	it('should create "recipes" model with 2 recipes', inject(function($controller) {
      var scope = {},
          ctrl = $controller('CookingRecipesController', {$scope:scope});

      expect(scope.recipes.length).toBe(2);
    }));
	
});
