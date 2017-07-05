"use strict";
var app;
(function (app) {
    angular
        .module('userManagment', [])
        .controller('SignInController', SignInController);
    function SignInController(Auth, appFirebase, stateProvider) {
        var vm = this;
        vm.auth = Auth;
        vm.state = stateProvider;
        vm.signInGoogle = signInWithGoogle;
        function signInWithGoogle() {
            vm.auth.$signInWithPopup('google')
                .then(function (result) {
                appFirebase.saveUserData(result.user.photoUrl, result.user.displayName);
                vm.state.go('profile');
                console.log('signed in as ', result.user.uid);
            });
        }
    }
})(app || (app = {}));
;
