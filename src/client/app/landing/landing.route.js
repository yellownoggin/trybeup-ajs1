var app;
(function (app) {
    'use strict';
    angular
        .module('app.landing')
        .config(initRouter);
    /**
     * initRouter - Initialize the router's default behaviors
     */
    // @ngInject
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
