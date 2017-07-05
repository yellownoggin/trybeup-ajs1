namespace app {
    'use strict';

    angular
        .module('app.landing')
        .config(initRouter);
    /**
     * initRouter - Initialize the router's default behaviors
     */
    // @ngInject
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
                        // controller: 'ProfileController',
                        controller: (Auth, $state, $timeout, $scope) => {

                            $scope.state = $state;

                            $timeout(() => { console.log($scope.state.current, 'state current'); })
                        }
                        // controllerAs: 'sc',
                    }
                }
            });
    }
};
