'use strict';

angular.module('calcApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'angularAddToHomeScreen'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
  /*  .run(function () {
        FastClick.attach(document.body);
    });*/
