
import React from "react";

function WeatherImage({ weatherData }) {
  function getImageSrc(weather) {
    if (weather.weather[0].hourly[0].chanceofsunshine > 50) {
      return "./icons8-summer.gif";
    } else if (weather.weather[0].hourly[0].chanceofrain > 50) {
      return "./icons8-torrential-rain.gif";
    } else if (weather.weather[0].hourly[0].chanceofsnow > 50) {
      return "./icons8-light-snow.gif";
    }
    return "./spring.jpeg";
  }

  return <img src={getImageSrc(weatherData)} alt="weather" />;
}

export default WeatherImage;
