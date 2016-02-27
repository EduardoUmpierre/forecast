// ROUTES
weatherApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'pages/home.html'
        })
        .when('/forecast', {
            controller: 'forecastController',
            templateUrl: 'pages/forecast.html'
        })
        .when('/forecast/:days', {
            controller: 'forecastController',
            templateUrl: 'pages/forecast.html'
        });
});