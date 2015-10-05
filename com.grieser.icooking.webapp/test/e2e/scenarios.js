describe('iCooking App', function() {

	it('should redirect index.html to index.html#/recipes', function() {
		browser.get('app/index.html');
		browser.getLocationAbsUrl().then(function(url) {
		expect(url).toEqual('/recipes');
	});
	});	
	
	
  describe('Recipe view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/recipes');
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
  
  it('should render recipse specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('Pizza');
      element(by.css('.recipes li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/recipes/1_Pizza');
      });
    });
  });


  describe('Recipe detail view', function() {
	  
	  beforeEach(function() {
	    browser.get('app/index.html#/recipes/0_Käsespätzle');
	      });
	  
	  
	      it('should display placeholder page with recipe Id', function() {
	expect(element(by.binding('recipe.name')).getText()).toBe('Käsespätzle');
	  });
	});  

  
});