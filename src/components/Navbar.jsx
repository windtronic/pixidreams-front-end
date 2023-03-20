import { Link } from "react-router-dom";

import About from './About'
import Movies from './Movies'
import News from './News'
import Home from './Home'
import LoginModal from './LoginModal'



const Navbar = () => {
  return (
    <div id="navbar">

        <div id="centerLinks">
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/movies">Movies</Link>
             <Link to="/news">News</Link>
        </div>
        <div id="rightLinks">
             <Link to="/login">Login</Link>
        </div>

    </div>

  );
};

export default Navbar;
