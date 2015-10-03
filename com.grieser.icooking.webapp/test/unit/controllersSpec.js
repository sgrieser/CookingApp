'use strict';

/* jasmine specs for controllers go here */
describe('CookingRecipesController', function(){
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
});




