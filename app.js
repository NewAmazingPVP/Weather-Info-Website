var key = config.MY_KEY

$(document).ready(function() {
  $("#getWeather").click(function() {
    var city = $("#city").val();
    var apiKey = "MY_KEY";
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;

    $.getJSON(apiUrl, function(data) {
      var weather = data.weather[0].description;
      var temp = data.main.temp - 273.15;
      var humidity = data.main.humidity;
      var wind = data.wind.speed;

      $("#output").html(
        "Weather: " +
          weather +
          "<br>Temperature: " +
          temp.toFixed(2) +
          "°C" +
          "<br>Humidity: " +
          humidity +
          "%" +
          "<br>Wind Speed: " +
          wind +
          "m/s"
      );
    });
  });
});
