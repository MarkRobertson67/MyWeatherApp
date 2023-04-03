import { useState } from "react";
import "./Home.css"
import TemperatureConverter from "./TemperatureConverter"
import WeatherImages from "./WeatherImages";
import WeatherForecast from "./WeatherForecast";
import CurrentWeather from "./CurrentWeather";
import SearchHistory from "./SearchHistory";

function Home({ weatherData, onLocationSubmit }) {
    const [searchHistory, setSearchHistory] = useState([]);
    const [locationInput, setLocationInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const query = locationInput.trim();
        if (!query) {
          return;
        }

         // Check if location already exists in search history
      const existingIndex = searchHistory.findIndex(
      (search) => search.query.toLowerCase() === query.toLowerCase()
      );
      if (existingIndex >= 0) {
    // Remove existing search result from search history
      searchHistory.splice(existingIndex, 1);
      }

        // Call the onLocationSubmit function passed from parent component to get weather data for the location
        const weatherData = await onLocationSubmit(query);
        // Add a new search result to search history and update search results
        const newSearchResult = { query, data: weatherData };
        setSearchHistory([newSearchResult, ...searchHistory].slice(0, 10));
        setSearchResults([newSearchResult, ...searchResults]
          .filter((_, index) => index < 10)
        );
        
        setLocationInput("");
      };
      
    //   To handle search history clicks. Call the onLocationSubmit function passed from parent component to get weather data for the selected location
      const handleSearchHistoryClick = (search) => {
        onLocationSubmit(search.query);
      };
    
  
    return (
      <div className="container">
        <header className="header"></header>
        <main className="main-container">
          <section className="left-container">
            <TemperatureConverter />
          </section>
  
          <section className="center-container">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  id="location"
                  type="text"
                  name="location"
                  label="Input Location"
                  value={locationInput}
                  placeholder="Pick a Location"
                  onChange={(event) => setLocationInput(event.target.value)}
                />
                <button className="form-button" type="submit">
                  Get Weather
                </button>
              </div>
            </form>
            {weatherData && (
              <div>
                <CurrentWeather weatherData={weatherData} />
                <WeatherImages weatherData={weatherData} />
                <WeatherForecast forecastData={weatherData.weather} />
              </div>
            )}
          </section>
  
          <section className="right-container">
          <SearchHistory searchHistory={searchHistory} onSearchHistoryClick={handleSearchHistoryClick} />   
          </section>
        </main>
      </div>
    );
  }
  
export default Home;



