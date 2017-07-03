namespace app {
    'use strict';

    angular
        .module('app.shell')
        .directive('appFooter', appFooter);

        function appFooter() {
            return {
                templateUrl: 'app/shell/footer.html'
            };
        }

};
