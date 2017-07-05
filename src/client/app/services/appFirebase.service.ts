/**
 * Handles all Firebase database and storage interactions.
*/

namespace app {
    angular
        .module('app')
        .factory('appFirebase', appFirebaseFactory);


    function appFirebaseFactory(latinize, Auth, firebase) {
        const vm = this;
        vm.database = firebase.database();
        return {
            saveUserData: saveUserData
        }

        function saveUserData(imageUrl, displayName, uid) {
            // const currentUser = Auth.$getAuth();
            // console.log(currentUser, 'message');

            if (!displayName) {
                displayName = 'Anonymous';
            }
            let searchFullName = displayName.toLowerCase();
            let searchReversedFullName = searchFullName.split(' ').reverse().join(' ');
            try {
                searchFullName = latinize(searchFullName);
                searchReversedFullName = latinize(searchReversedFullName);
            } catch (e) {
                console.error(e);
            }

            const updateData = {
                profile_picture: imageUrl,
                full_name: displayName,
                _search_index: {
                    full_name: searchFullName,
                    reversed_full_name: searchReversedFullName
                }
            };

            return vm.database.ref(`people/${uid}/`).update(updateData);

        }
    }
}
