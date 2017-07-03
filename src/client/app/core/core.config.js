var app;
(function (app) {
    'use strict';
    angular
        .module('app.core')
        .config(initDebug)
        .config(initRouter)
        .config(initTheme);
    function initDebug($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }
    function initRouter($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
    }
    function initTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('yellow');
    }
})(app || (app = {}));
;
