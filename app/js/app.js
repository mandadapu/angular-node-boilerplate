'use strict';

// Declare app level module which depends on filters, and services
angular.module('VEVO', ['VEVO.filters', 'VEVO.services', 'VEVO.directives', 'VEVO.controllers','ui.bootstrap']).
  config(['$routeProvider','$locationProvider', '$httpProvider',function($routeProvider,$locationProvider, $httpProvider) {
    $routeProvider.when('/video', {templateUrl: 'partials/video.html', controller: 'videoCtrl'})
    .otherwise({redirectTo: '/video'});

    $locationProvider.html5Mode(true);
  }]);

//Defining services module
angular.module('VEVO.services', ['ngResource']);

//Defining empty controller module
angular.module('VEVO.controllers',[ ]);

//Defining directives module
angular.module('VEVO.directives', [ ]);

//Defining filters module
angular.module('VEVO.filters', [ ]);
