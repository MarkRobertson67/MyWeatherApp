
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {

  const [weatherData, setWeatherData] = useState("");

  // This is a one time use API call with no location which as per the wttr.in documentation, if you omit the location name in the API call, it will return the weather data based on the user's IP address
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://wttr.in/?format=j1`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };
    fetchWeatherData();
  }, []);


  const handleLocationSubmit = async (location) => {
    try {
      const response = await fetch(`https://wttr.in/${location}?format=j1`);
      const data = await response.json();
      setWeatherData(data);
      return data; // Return the weather data from the API call with requested locaation
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };
  

  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home weatherData={weatherData} onLocationSubmit={handleLocationSubmit} />}
        />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;
