'use strict';

/* jasmine specs for controllers go here */
describe('CookingRecipesController', function(){
	  
	beforeEach(function(){
	    this.addMatchers({
	      toEqualData: function(expected) {
	        return angular.equals(this.actual, expected);
	      }
	    });
	  });
	
	beforeEach(module('iCookingApp'));
	
	describe('PhoneListCtrl', function(){
		    
	    var scope, ctrl, $httpBackend;
	
	    beforeEach(module('iCookingApp'));
	    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $resource) {
	      $httpBackend = _$httpBackend_;
	      $httpBackend.expectGET('http://localhost:9000/recipes').
	          respond([{name: 'Recipe_0'}, {name: 'Recipe_1'}]);
	
	      scope = $rootScope.$new();
	      ctrl = $controller('CookingRecipesController', {$scope: scope});
	    }));
	
	
	    it('should create "recipe" model with 2 recipes fetched from xhr', function() {
//	      expect(scope.recipes).toBeUndefined();
	      $httpBackend.flush();
	
	      expect(scope.recipes).toEqual([{name: 'Recipe_0'}, {name: 'Recipe_1'}]);
	    });
	
	
	    it('should set the default value of orderProp model', function() {
	      expect(scope.orderProp).toBe('duration');
	    });
	});
	  
	  describe('CookingRecipesDetailController', function(){
		    var scope, $httpBackend, ctrl;
		    

		    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
		      $httpBackend = _$httpBackend_;
		      $httpBackend.expectGET('recipes/xyz.json').respond({name:'recipe xyz'});

		      $routeParams.recipeId = 'xyz';
		      scope = $rootScope.$new();
		      ctrl = $controller('CookingRecipesDetailController', {$scope: scope});
		    }));


		    it('should fetch recipe detail', function() {
		      expect(scope.recipe).toBeUndefined();
		      $httpBackend.flush();

		      expect(scope.recipe).toEqual({name:'recipe xyz'});
		    });
		  });
});




