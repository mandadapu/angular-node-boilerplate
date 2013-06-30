'use strict';
/* Services */

angular.module('VEVO.services').factory('GenreService', function ($resource) {
    return $resource('api/genre', {}, {
        query: {method: 'GET', params: {}, isArray: true}
    });
});


