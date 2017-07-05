"use strict";
var app;
(function (app) {
    angular
        .module('app')
        .factory('appFirebase', appFirebaseFactory);
    function appFirebaseFactory() {
        return {
            saveUserData: saveUserData
        };
        function saveUserData(imageUrl, displayName) {
        }
    }
})(app || (app = {}));
