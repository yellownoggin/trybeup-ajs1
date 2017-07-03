namespace app {
    'use strict';

    angular
        .module('app.shell')
        .directive('appShell', appShell);

        function appShell() {
            return {
                templateUrl: 'app/shell/shell.html'
            };
        }
};
