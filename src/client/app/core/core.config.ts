namespace app {
    'use strict';


    // Initialize Firebase
     const config = {
       apiKey: 'AIzaSyAev5B591IvR4DlNtyAQmsoqGwcC-dtZpE',
       authDomain: 'ytribe-ajs16.firebaseapp.com',
       databaseURL: 'https://ytribe-ajs16.firebaseio.com',
       projectId: 'ytribe-ajs16',
       storageBucket: 'ytribe-ajs16.appspot.com',
       messagingSenderId: '1062731323167'
     };
     firebase.initializeApp(config);

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
