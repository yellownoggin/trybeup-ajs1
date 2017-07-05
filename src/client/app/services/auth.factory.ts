namespace app {
    // TODO: USE STRICT IN TYPESCRIPT ???
     angular
        .module('app')
        .service('Auth', authService)
        .factory('providerFact', providerFactory)

        function authService($firebaseAuth) {
            return $firebaseAuth();
        }

        // function GoogleProviderFactory($firebaseAuth) {
        //     return {
        //     googleProvider: new $firebaseAuth.GoogleAuthProvider()
        // };
        function providerFactory() {
            // TODO: IS THERE A WAY TO DO THIS WITH ANGULAR FIRE
            // CAN NOT FIND THE NAME FIREBASE.
            return {
            googleProvider: new firebase.auth.GoogleAuthProvider()
        };
        }
};
