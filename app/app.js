angular.module('lucy', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'templates', 'd3', 'knobs']);

angular.module('lucy').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });


    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('lucy').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
