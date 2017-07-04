namespace app {
    'use strict';

    angular
        .module('app.shell')
        .directive('topNav', topNav);

        function topNav() {
            return {
                templateUrl: 'app/shell/topnav.html'
            };
        }

};
