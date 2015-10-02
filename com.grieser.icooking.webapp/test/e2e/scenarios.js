describe('iCooking App', function() {

  describe('Recipe view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the recipe list as a user types into the search box', function() {

      var recipeList = element.all(by.repeater('recipe in recipes'));
      var query = element(by.model('query'));

      expect(recipeList.count()).toBe(2);

      query.sendKeys('Käs');
      expect(recipeList.count()).toBe(1);

      query.clear();
      query.sendKeys('zza');
      expect(recipeList.count()).toBe(1);
    });
  });
  
  
  it('should be possible to control recipe order via the drop down select box', function() {

	  var recipeNameColumn = element.all(by.repeater('recipe in recipes').column('recipe.name'));
	  var query = element(by.model('query'));

	  function getNames() {
	    return recipeNameColumn.map(function(elm) {
	      return elm.getText();
	    });
	  }

	  query.sendKeys('');
	  
	  expect(getNames()).toEqual([
	                      	    "Pizza",
	                      	    "Käsespätzle"
	                      	  ]);

	  element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

	  expect(getNames()).toEqual([
	    "Käsespätzle",
	    "Pizza"
	  ]);

	});
  

});