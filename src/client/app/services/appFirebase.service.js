"use strict";
var app;
(function (app) {
    angular
        .module('app')
        .factory('appFirebase', appFirebaseFactory);
    function appFirebaseFactory(latinize, Auth, firebase) {
        var vm = this;
        vm.database = firebase.database();
        return {
            saveUserData: saveUserData
        };
        function saveUserData(imageUrl, displayName, uid) {
            if (!displayName) {
                displayName = 'Anonymous';
            }
            var searchFullName = displayName.toLowerCase();
            var searchReversedFullName = searchFullName.split(' ').reverse().join(' ');
            try {
                searchFullName = latinize(searchFullName);
                searchReversedFullName = latinize(searchReversedFullName);
            }
            catch (e) {
                console.error(e);
            }
            var updateData = {
                profile_picture: imageUrl,
                full_name: displayName,
                _search_index: {
                    full_name: searchFullName,
                    reversed_full_name: searchReversedFullName
                }
            };
            return vm.database.ref("people/" + uid + "/").update(updateData);
        }
    }
})(app || (app = {}));
