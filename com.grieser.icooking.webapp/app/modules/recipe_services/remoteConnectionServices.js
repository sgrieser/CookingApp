'use strict';

/* Services */
angular.module('iCookingApp').

service('RecipesFactory', function ($resource) {
    return $resource('http://192.168.0.18:9000/recipes', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

angular.module('iCookingApp').
service('RecipeFactory', function ($resource) {
    return $resource('http://192.168.0.18:9000/recipes/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
