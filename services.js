// SERVICES
weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=94cd6c40f0df1baa9b7db667ba255def&lang=pt", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
        return weatherAPI.get({ q: city, cnt: days });
    };
}]);