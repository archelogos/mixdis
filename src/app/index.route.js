(function() {
    'use strict';

    angular
    .module('mixdis')
    .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        // Enabe HTML5 Mode
        $locationProvider.html5Mode(true);

        // Default State
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('start', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('state2', {
            url: '/state2',
            templateUrl: 'app/partials/state2.html'
        })
        .state('state2.list', {
            url: '/list',
            templateUrl: 'app/partials/state2.list.html'
        });
    }

})();
