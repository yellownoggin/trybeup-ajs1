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
        vm.appFire = appFirebase;
        vm.$timeout(function () { console.log(vm.state.current, 'current state'); }, 1);
        function signInWithGoogle() {
            vm.auth.$signInWithPopup('google')
                .then(function (result) {
                var uid = result.user.uid;
                var imageUrl = result.user.photoURL;
                console.log(result.user, 'user');
                var displayName = result.user.displayName;
                appFirebase.saveUserData(imageUrl, displayName, uid);
                vm.$timeout(function () {
                    vm.state.go('profile.user', { uid: uid });
                    console.log(uid, 'inside timeout');
                }, 1000);
            }).catch(function (e) {
                console.log('Authentication Failed', e);
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
