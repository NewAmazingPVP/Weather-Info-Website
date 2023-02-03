
var MY_KEY = config.MY_KEY;

$(document).ready(function() {
    $("#submit").click(function() {
      var city = $("#city").val();
      var apiKey = "MY_KEY";
      var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
      $.ajax({
        url: apiUrl,
        success: function(response) {
          var temperature = response.main.temp;
          var conditions = response.weather[0].description;
          $("#weather-info").html("Temperature: " + temperature + "°C<br>" + "Conditions: " + conditions);
        }
      });
    });
  });
  