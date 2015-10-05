'use strict';

/* Filters */
angular.module('iCookingFilters', []).filter('rating', function() {
	  return function(input) {
		  
		  var result = "";
	      for (var i = 0; i < input; i++)
	    	  result = result + '\u2605';  
	      
	      return result;
	  };
	});