"use strict";
var app;
(function (app) {
    angular
        .module('app')
        .service('Auth', authService)
        .factory('providerFact', providerFactory);
    function authService($firebaseAuth) {
        return $firebaseAuth();
    }
    function providerFactory() {
        return {
            googleProvider: new firebase.auth.GoogleAuthProvider()
        };
    }
})(app || (app = {}));
;
