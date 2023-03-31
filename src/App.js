
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  const handleLocationSubmit = async (location) => {
    try {
      const response = await fetch(`https://wttr.in/${location}?format=j1`);
      const data = await response.json();
      setWeatherData(data);
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
