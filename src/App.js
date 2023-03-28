
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Map from "./Components/Map";
import About from "./Components/About";
import Error from "./Components/Error";



function App() {






  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Routes>
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>


        <p>
          My weather App
        </p>
        
      </header>
    </div>
  );
}

export default App;
