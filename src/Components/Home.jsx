
import { useState, useEffect } from "react";
import "./Home.css"

function Home({ weatherData, onLocationSubmit }) {

    const [conversionResult, setConversionResult] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const [locationInput, setLocationInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleConversionSubmit = (event) => {
        event.preventDefault();
        const conversionValue = event.target.convert.value;
        const isToCelsius = event.target.conversionType.value === "toCelsius";
        const result = isToCelsius
          ? ((conversionValue - 32) * 5) / 9
          : conversionValue * (9 / 5) + 32;
        setConversionResult({ value: result.toFixed(2), isToCelsius });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const query = locationInput.trim();
        if (query) {
          onLocationSubmit(query);
          setLocationInput("");
      
          if (searchResults.length === 0) {
            setSearchResults([{ query, data: null }]);
          }
        }
      };
      
      
      const handleSearchHistoryClick = (search) => {
        onLocationSubmit(search.query);
      };

      useEffect(() => {
        if (weatherData && locationInput.trim()) {
          setSearchResults((prevSearchResults) => {
            const isDuplicate = prevSearchResults.some(searchResult => searchResult.query === locationInput.trim());
            if (!isDuplicate) {
              const updatedSearchResults = [...prevSearchResults, { query: locationInput.trim(), data: weatherData }];
              return updatedSearchResults.slice(-10);
            }
            return prevSearchResults;
          });
        }
      }, [weatherData, locationInput]);
      
          
      useEffect(() => {
        if (searchResults.length > 0) {
          // Limit search history to 10 most recent searches
          setSearchHistory(searchResults.slice(-10));
        }
      }, [searchResults]);


    return (
    <div className="container">
      <header className="header">Weather App</header>
      <main className="main-container">
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
        <form className="form-container" onSubmit={handleSubmit}>
          <input
          style={{ fontSize: "30px", backgroundColor: "white", color: "black" }}
          id="location"
          type="text"
          name="location"
          value={locationInput}
          placeholder="Pick a Location"
          onChange={(event) => setLocationInput(event.target.value)}
        />
        <button className="form-button" type="submit">Get Weather</button>
        </form>

          {weatherData && (
            <div>
              <h1>{weatherData.nearest_area[0].areaName[0].value}</h1>
              <p>Currently: Feels like {weatherData.current_condition[0].FeelsLikeF}°F</p>
              <p>Area: {weatherData.nearest_area[0].areaName[0].value}</p>
              <p>Region: {weatherData.nearest_area[0].region[0].value}</p>
              <p>Country: {weatherData.nearest_area[0].country[0].value}</p>
              <p>Current temperature: {weatherData.current_condition[0].temp_F}°F</p>
              <ul>

              <div className="forecast-container">
  {weatherData.weather.map((forecast, index) => {
    if (index < 3) { // Display forecast for next 3 days
      return (
        <div className="forecast-item" key={index}>
          <p className="forecast-day">{index === 0 ? "Today" : index === 1 ? "Tomorrow" : "The day after tomorrow"}</p>
          <p className="forecast-maxtemp">Max temp: {forecast.maxtempF}°F</p>
          <p className="forecast-mintemp">Min temp: {forecast.mintempF}°F</p>
          <p className="forecast-description">Weather description: {forecast.hourly[0].weatherDesc[0].value}</p>
        </div>
      );
    } else {
      return null;
    }
  })}
</div>


</ul>

            </div>
          )}
        </section>

        <section className="right-container">
          <h2>Search History</h2>
          {searchHistory.length === 0 ? (
            <p>No recent searches</p>
          ) : (
            <ul>
              {searchHistory.map((search, index) => (
                <li key={index} onClick={() => handleSearchHistoryClick(search)}>
                  {search.query}
                  {index !== searchHistory.length - 1 ? ", " : ""}
                  {searchResults[index]?.data?.current_condition &&
      <span> - {searchResults[index].data.current_condition[0].temp_F}°F</span>
    }
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
export default Home;



