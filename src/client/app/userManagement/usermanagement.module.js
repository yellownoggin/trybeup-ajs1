"use strict";
var app;
(function (app) {
    angular
        .module('userManagment', [])
        .controller('SignInController', SignInController);
    function SignInController(Auth, appFirebase, $state, $location, $timeout) {
        var vm = this;
        vm.auth = Auth;
        vm.state = $state;
        vm.signInGoogle = signInWithGoogle;
        vm.$location = $location;
        vm.$timeout = $timeout;
        vm.signOut = signOut;
        vm.$timeout(function () { console.log(vm.state.current, 'current state'); }, 1);
        function signInWithGoogle() {
            vm.auth.$signInWithPopup('google')
                .then(function (result) {
                var uid = result.user.uid;
                vm.$timeout(function () {
                    vm.state.go('profile.user', { uid: uid });
                    console.log(uid, 'inside timeout');
                }, 1000);
            });
        }
        function signOut() {
            vm.auth.$signOut();
            vm.auth.$onAuthStateChanged(function (firebaseUser) {
                if (firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                }
                else {
                    console.log("Signed out");
                }
            });
        }
    }
})(app || (app = {}));
;
