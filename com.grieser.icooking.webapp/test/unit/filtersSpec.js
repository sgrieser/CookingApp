'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

	  beforeEach(module('iCookingFilters'));

	  describe('rating', function() {

	    it('should convert rating into unicode stars',
	        inject(function(ratingFilter) {
	      expect(ratingFilter(1)).toBe('\u2605');
	      expect(ratingFilter(3)).toBe('\u2605\u2605\u2605');
	    }));
	  });
	});
