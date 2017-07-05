"use strict";
var app;
(function (app) {
    'use strict';
    angular
        .module('app.shell')
        .directive('topNav', topNav);
    function topNav() {
        var _this = this;
        return {
            templateUrl: 'app/shell/topnav.html',
            controller: function ($scope, $firebaseAuth, $state, $timeout) {
                console.log('this', _this);
                $scope.auth = $firebaseAuth();
                $scope.signOut = signOut;
                $scope.state = $state;
                $timeout(function () { console.log($scope.state.current, 'current state'); }, 1000);
                console.log($scope.auth, 'message');
                $scope.auth.$onAuthStateChanged(function (firebaseUser) {
                    if (firebaseUser) {
                        console.log("Signed in as:", firebaseUser.uid);
                    }
                    else {
                        console.log("Signed out");
                    }
                });
                function signOut() {
                    $scope.auth.$signOut();
                    console.log('currentUser', $scope.auth.$getAuth());
                }
            },
            controllerAs: 'tn'
        };
    }
})(app || (app = {}));
;
