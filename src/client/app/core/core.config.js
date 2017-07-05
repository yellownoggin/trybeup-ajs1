"use strict";
var app;
(function (app) {
    'use strict';
    var config = {
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
        .config(initTheme)
        .constant('latinize', window.latinize);
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
