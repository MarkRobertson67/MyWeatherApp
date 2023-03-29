// import { useEffect, useState } from "react";
import "./Home.css"

function Home({ weatherData }) {

  

    return (
    <div className="container">
      <header className="header">Weather App</header>
      <main className="main.container">
       
        
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
      </main>
    </div>
  );
}
export default Home;



