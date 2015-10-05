'use strict';

/* jasmine specs for controllers go here */
describe('CookingRecipesController', function(){
	  
	beforeEach(module('iCookingApp'));
	
	describe('PhoneListCtrl', function(){
		    var scope, ctrl, $httpBackend;
		    
	    var scope, ctrl, $httpBackend;
	
	    beforeEach(module('iCookingApp'));
	    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      $httpBackend = _$httpBackend_;
	      $httpBackend.expectGET('recipes/recipes.json').
	          respond([{name: 'Kaesespaetzle'}, {name: 'Pizza'}]);
	
	      scope = $rootScope.$new();
	      ctrl = $controller('CookingRecipesController', {$scope: scope});
	    }));
	
	
	    it('should create "recipe" model with 2 recipes fetched from xhr', function() {
	      expect(scope.phones).toBeUndefined();
	      $httpBackend.flush();
	
	      expect(scope.recipes).toEqual([{name: 'Kaesespaetzle'},
	                                   {name: 'Pizza'}]);
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




