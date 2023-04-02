
import React from "react";

function WeatherForecast({ forecastData }) {
  return (
    <div className="forecast-container">
      {forecastData.map((forecast, index) => {
        if (index < 3) {
          return (
            <div className="forecast-item" key={index}>
              <p className="forecast-day">
                {index === 0
                  ? "Today"
                  : index === 1
                  ? "Tomorrow"
                  : "The day after tomorrow"}
              </p>
              <p className="forecast-maxtemp">
                Max temp: {forecast.maxtempF}°F
              </p>
              <p className="forecast-mintemp">
                Min temp: {forecast.mintempF}°F
              </p>
              <p className="forecast-description">
                Weather description: {forecast.hourly[0].weatherDesc[0].value}
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default WeatherForecast;

