"use strict";
var app;
(function (app) {
    angular
        .module('app')
        .factory('appFirebase', appFirebaseFactory);
    function appFirebaseFactory(latinize, Auth) {
        return {
            saveUserData: saveUserData
        };
        function saveUserData(imageUrl, displayName) {
            var currentUser = Auth.$getAuth();
            console.log(currentUser, 'message');
        }
    }
})(app || (app = {}));
