/**
 * Handles all Firebase database and storage interactions.
*/

namespace app {
    angular
        .module('app')
        .factory('appFirebase', appFirebaseFactory);


        function appFirebaseFactory(latinize, Auth) {
            return {
                saveUserData: saveUserData
            }

            function saveUserData(imageUrl, displayName) {
                const currentUser = Auth.$getAuth();
                console.log(currentUser, 'message');

            }
        }
}
