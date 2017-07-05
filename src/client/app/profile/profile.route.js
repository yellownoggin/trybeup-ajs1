"use strict";
var app;
(function (app) {
    'use strict';
    angular
        .module('app.landing')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('profile', {
            abstract: true,
            url: '/profile',
            views: {
                main: {
                    templateUrl: 'app/profile/profile.html'
                }
            }
        })
            .state('profile.user', {
            url: '/:uid',
            views: {
                profile: {
                    templateUrl: 'app/profile/profile.user.html',
                    controller: function (Auth, $state, $timeout, $scope) {
                        $scope.state = $state;
                        $timeout(function () { console.log($scope.state.current, 'state current'); });
                    }
                }
            }
        });
    }
})(app || (app = {}));
;
