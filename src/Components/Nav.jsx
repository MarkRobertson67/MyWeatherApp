
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

  return (
    <nav className="navbar">
      <ul className="navbarlinks">

      <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/map">Map</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      
    </nav>
  );
}

export default Nav;



//   const [locationInput, setLocationInput] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onLocationSubmit(locationInput);
//     setLocationInput("");
//   };


// {/* <form className="form-container" onSubmit={handleSubmit}>
//           <input
//           style={{ fontSize: "30px", backgroundColor: "white", color: "black" }}
//           id="location"
//           type="text"
//           name="location"
//           value={locationInput}
//           placeholder="Pick a Location"
//           onChange={(event) => setLocationInput(event.target.value)}
          

//         />
//         <button className="form-button" type="submit">Get Weather</button>
//         </form> */}