"use strict";
var app;
(function (app) {
    'use strict';
    angular
        .module('app.landing')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            views: {
                main: {
                    controller: 'SignInController',
                    templateUrl: 'app/landing/landing.html'
                }
            }
        });
    }
})(app || (app = {}));
;
