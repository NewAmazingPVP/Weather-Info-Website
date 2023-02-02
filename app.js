$(document).ready(function() {
    $("#submit").click(function() {
      var city = $("#city").val();
      var apiKey = "af527d7292e58a1b188954167ce7b7d2";
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