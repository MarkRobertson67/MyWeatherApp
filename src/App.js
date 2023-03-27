
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav"
import Home from "./Components/Home";
// import Map from "./Components/Map"



function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>


        <p>
          My weather App
        </p>
        
      </header>
    </div>
  );
}

export default App;
