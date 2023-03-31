// Wait for the document to be fully loaded before running the script
$(document).ready(function() {

  // Listen for a click on the "Get Weather" button
  jQuery("#getWeather").click(function() {

    // Get the value entered in the input field with ID "city"
    var city = $("#city").val();

    // Set the API key to be used to retrieve weather data
    var apiKey = process.env.WEATHER_API_KEY;

    // Construct the URL for the API request using the city and API key
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    // Send a GET request to the API and execute a callback function when the response is received
    $.getJSON(apiUrl, function(data) {

      // Extract the weather description from the API response
      var weather = data.weather[0].description;

      // Convert the temperature from Kelvin to Celsius and round to 2 decimal places
      var temp = data.main.temp - 273.15;

      // Extract the humidity value from the API response
      var humidity = data.main.humidity;

      // Extract the wind speed value from the API response
      var wind = data.wind.speed;

      var sunrise = data.sys.sunrise;

      var sunriseDate = new Date(sunrise * 1000); // create new Date object from Unix timestamp
      var sunriseHour = sunriseDate.getHours(); // get hour value from Date object
      var sunriseMinute = sunriseDate.getMinutes(); // get minute value from
      if (sunriseMinute < 10)
      {
        sunriseMinute = "0" + sunriseMinute;
      }

      //note: $ is the same as jQuery
      // Display the weather data in the HTML element with ID "output"
      jQuery("#output").html(
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
          "m/s" +
          "<br> Sunrise: " +
          sunriseHour +
          ":" +
          sunriseMinute + " est"
      );
    });
  });
});
