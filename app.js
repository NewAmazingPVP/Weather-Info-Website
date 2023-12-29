$(document).ready(function() {
  jQuery("#getWeather").click(function() {
    var city = $("#city").val();
    var apiKey = af527d7292e58a1b188954167ce7b7d2;
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

    $.getJSON(apiUrl, function(data) {
      var weather = data.weather[0].description;
      var temp_c = data.main.temp;
      var temp_f = (temp_c * 9/5) + 32;
      var feels_like_c = data.main.feels_like;
      var feels_like_f = (feels_like_c * 9/5) + 32;
      var temp_min_c = data.main.temp_min;
      var temp_min_f = (temp_min_c * 9/5) + 32;
      var temp_max_c = data.main.temp_max;
      var temp_max_f = (temp_max_c * 9/5) + 32;
      var humidity = data.main.humidity;
      var wind_speed = data.wind.speed;
      var wind_deg = data.wind.deg;
      var clouds = data.clouds.all;
      var pressure = data.main.pressure;
      var visibility_m = data.visibility / 1609.34;
      var visibility_km = data.visibility / 1000;

      if (wind_deg > 337.5 || wind_deg <= 22.5) {
        var wind_dir = "N";
      } else if (wind_deg > 22.5 && wind_deg <= 67.5) {
        var wind_dir = "NE";
      } else if (wind_deg > 67.5 && wind_deg <= 112.5) {
        var wind_dir = "E";
      } else if (wind_deg > 112.5 && wind_deg <= 157.5) {
        var wind_dir = "SE";
      } else if (wind_deg > 157.5 && wind_deg <= 202.5) {
        var wind_dir = "S";
      } else if (wind_deg > 202.5 && wind_deg <= 247.5) {
        var wind_dir = "SW";
      } else if (wind_deg > 247.5 && wind_deg <= 292.5) {
        var wind_dir = "W";
      } else {
        var wind_dir = "NW";
      }

      //note: $ is the same as jQuery
      jQuery("#output").html(
        "Weather: " + weather +
        "<br>Temperature: " + temp_c.toFixed(2) + "°C / " + temp_f.toFixed(2) + "°F" +
        "<br>Feels like: " + feels_like_c.toFixed(2) + "°C / " + feels_like_f.toFixed(2) + "°F" +
        "<br>Minimum Temperature: " + temp_min_c.toFixed(2) + "°C / " + temp_min_f.toFixed(2) + "°F" +
        "<br>Maximum Temperature: " + temp_max_c.toFixed(2) + "°C / " + temp_max_f.toFixed(2) + "°F" +
        "<br>Humidity: " + humidity + "%" +
        "<br>Wind Speed: " + wind_speed + "m/s" +
        "<br>Wind Direction: " + wind_dir + " " +"(" + wind_deg + "°" + ")" +
        "<br>Clouds: " + clouds + "%" +
        "<br>Pressure: " + pressure + " hPa" +
        "<br>Visibility: " + visibility_km.toFixed(2) + " km / " + visibility_m.toFixed(2) + " miles"
      );
    });
  });
});
