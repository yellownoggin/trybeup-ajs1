namespace app {

    angular
        .module('userManagment', [])
        .controller('SignInController', SignInController);

    /**
     * // JSDOCS HOW...PATTERNS
     * [SignInController description]
     * @param  {[type]} Auth           [description]
     * @param  {[type]} GoogleProvider [description]
     * @return {[type]}                [description]
     */
    function SignInController(Auth, appFirebase, stateProvider) {
        // TODO: TESTING CONTROLLERS AND ONNIT?
        const vm = this;
        vm.auth = Auth;
        vm.state = stateProvider;
        vm.signInGoogle = signInWithGoogle;


        // Methods

        function signInWithGoogle() {
            vm.auth.$signInWithPopup('google')
                .then((result) => {
                    appFirebase.saveUserData(result.user.photoUrl, result.user.displayName);
                    vm.state.go('profile')
                    console.log('signed in as ', result.user.uid);

                });
        }













        // TODO: don't need to create a provider with angularfire(unless want more granularity) take out or clean up
        // const gProvider = GoogleProvider;
        // Auth.signInWithPopup(gProvider).then(function(result) {
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     const token = result.credential.accessToken;
        //     // The signed-in user info.
        //     const user = result.user;
        //     // ...
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     const credential = error.credential;
        //     // ...
        // });

    }
};
