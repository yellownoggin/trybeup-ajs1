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
                    templateUrl: 'app/landing/landing.html'
                }
            }
        });
    }
})(app || (app = {}));
;
