
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
    )
}

export default Nav;
