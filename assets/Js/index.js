var city="";
var currentTemperature = $("#temper");
var currentUvindex= $("#UVdex");
var currentHumidty= $("#humidi");
var currentWSpeed=$("#wspeed");

var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");

var sCity=[];

var cityInput = document.querySelector("#cityInput");
var apiKey ="3ce875e0ba8303fb256a40a259c43bc5";

var cityCurrent = function (cityLat, cityLon) {
    var currWeatherURL =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" +  cityLon +  "&exclude=minutely&exclude=hourly&exclude=alerts" + "&units=imperial" + "&appid="  + apiKey;
      fetch(currWeatherURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayToday(data);
        });
    } else {
        alert("Error:" + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect");
    });
};

