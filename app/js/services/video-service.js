'use strict';

angular.module('VEVO.services').factory('VideoService', function ($resource) {
    return $resource('api/video', {}, {
        videos: { method: 'POST', isArray: true}
    });

});
