"use strict";
var app;
(function (app) {
    'use strict';
    angular
        .module('app', [
        'app.core',
        'app.landing',
        'app.shell',
        'userManagment'
    ]);
})(app || (app = {}));
