namespace app {
    'use strict';

    angular
        .module('app.shell')
        .directive('topNav', topNav);

        function topNav() {
            return {
                templateUrl: 'app/shell/topnav.html',
                controller: ($scope, $firebaseAuth, $state, $timeout) => {
                    console.log('this', this);
                    $scope.auth = $firebaseAuth();
                    $scope.signOut = signOut;
                    $scope.state = $state;

                    $timeout(() => { console.log($scope.state.current, 'current state'); }, 1000);
                    console.log($scope.auth, 'message');

                    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
                        if (firebaseUser) {
                            console.log("Signed in as:", firebaseUser.uid);

                        } else {
                            console.log("Signed out");
                            // fixes profile & splash controller not seeing the change in auth
                         }
                    });

                    function signOut() {
                        $scope.auth.$signOut();
                        // $scope.auth.$onAuthStateChanged(function(firebaseUser) {
                        //     if (firebaseUser) {
                        //         console.log("Signed in as:", firebaseUser.uid);
                        //
                        //     } else {
                        //         console.log("Signed out");
                        //         // fixes profile & splash controller not seeing the change in auth
                        //      }
                        // });
                        console.log('currentUser', $scope.auth.$getAuth());
                    }
                },
                controllerAs: 'tn'
            };
        }

};
