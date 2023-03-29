import { useState } from "react";
import "./Home.css"

function Home({ weatherData }) {

    const [conversionResult, setConversionResult] = useState(null);

    const handleConversionSubmit = (event) => {
        event.preventDefault();
        const conversionValue = event.target.convert.value;
        const isToCelsius = event.target.conversionType.value === "toCelsius";
        const result = isToCelsius
          ? ((conversionValue - 32) * 5) / 9
          : conversionValue * (9 / 5) + 32;
        setConversionResult({ value: result.toFixed(2), isToCelsius });
      };


    return (
    <div className="container">
      <header className="header">Weather App</header>
      <main className="main.container">
      <section className="left-container">
          <h2>Convert Temperature</h2>
          <form id="conversionForm" onSubmit={handleConversionSubmit}>
            <label>
              <input type="radio" name="conversionType" value="toCelsius" />
              Fahrenheit to Celsius
            </label>
            <label>
              <input type="radio" name="conversionType" value="toFahrenheit" />
              Celsius to Fahrenheit
            </label>
            <input type="number" name="convert" />
            <button type="submit">Convert</button>
          </form>
          {conversionResult && (
            <div>
              <p>
                {conversionResult.isToCelsius
                  ? `${conversionResult.value}°C`
                  : `${conversionResult.value}°F`}
              </p>
              <button onClick={() => setConversionResult(null)}>
                Clear Conversion
              </button>
            </div>
          )}
        </section>

        <section className="center-container">
        {weatherData && (
          <div>
            <h1>{weatherData.nearest_area[0].areaName[0].value}</h1>
            <p>Currently: Feels like {weatherData.current_condition[0].FeelsLikeF}°F</p>
            <p>Area: {weatherData.nearest_area[0].areaName[0].value}</p>
            <p>Region: {weatherData.nearest_area[0].region[0].value}</p>
            <p>Country: {weatherData.nearest_area[0].country[0].value}</p>
            <p>Current temperature: {weatherData.current_condition[0].temp_F}°F</p>
          </div>
        )}
        </section>
      </main>
    </div>
  );
}
export default Home;



