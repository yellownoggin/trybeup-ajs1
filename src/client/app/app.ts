namespace myApp {
    'use strict';

    angular
    .module('myApp', [])
    .controller('MainController', MainController);

    function MainController() {
        let vm = this;
        vm.test = 'Hello World';
    }
}
