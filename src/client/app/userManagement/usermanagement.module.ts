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
    function SignInController(Auth, appFirebase, $state, $location, $timeout) {
        // TODO: TESTING CONTROLLERS AND ONNIT?
        const vm = this;
        vm.auth = Auth;
        vm.state = $state;
        vm.signInGoogle = signInWithGoogle;
        vm.$location = $location;
        vm.$timeout = $timeout;
        vm.signOut = signOut;
        vm.$timeout(() => { console.log(vm.state.current, 'current state')}, 1);

        // Methods

        function signInWithGoogle() {
            vm.auth.$signInWithPopup('google')
                .then((result) => {
                    // const currentUser = vm.auth.$getAuth();
                    const uid = result.user.uid;
                    // console.log(profileUrl, 'profileUrl');
                    // console.log($location.url, 'locationUrl');

                    // appFirebase.saveUserData(result.user.photoUrl, result.user.displayName);
                    vm.$timeout(() => {
                        vm.state.go('profile.user', {uid: uid})
                        console.log(uid, 'inside timeout');
                    }, 1000);
                    // console.log('signed in as ', result.user.uid);

                });
        }

        function signOut() {
            vm.auth.$signOut();
            vm.auth.$onAuthStateChanged(function(firebaseUser) {
                if (firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);

                } else {
                    console.log("Signed out");
                    // fixes profile & splash controller not seeing the change in auth
                 }
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
