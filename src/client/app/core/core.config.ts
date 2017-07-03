namespace app {
    'use strict';

    // Initialize Firebase outside of the angular app* per the firebase angular youtube conventions


    angular
        .module('app.core')
        .config(initDebug)
        .config(initRouter)
        .config(initTheme);

        /**
     * Toggle debug info data (better disabled in production environments)
     * https://docs.angularjs.org/guide/production
     */
    // @ngInject
    function initDebug($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }

    /**
     * initRouter - Initialize the router's default behaviors
     */
    // @ngInject
    function initRouter($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
    }

    /**
     * Configuring theme/colors for the app
     * @param  {[type]} $mdThemingProvider [description]
     * @return {[type]}                    [description]
     */
    function initTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('yellow');
    }
};
