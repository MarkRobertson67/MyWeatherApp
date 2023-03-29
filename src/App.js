
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Map from "./Components/Map";
import About from "./Components/About";


function App() {

  const [weatherData, setWeatherData] = useState(null);

  const handleLocationSubmit = (location) => {
    fetch(`https://wttr.in/${location}?format=j1`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };


  return (
    <div className="App">
      <Nav onLocationSubmit={handleLocationSubmit} />
      <Routes>
        <Route path="/" element={<Home weatherData={weatherData}/>} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
