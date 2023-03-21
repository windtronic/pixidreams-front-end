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
             <Link to="/"><button className='navBtn'>HOME</button></Link>
             <Link to="/Movies"><button className='navBtn'>MOVIES</button></Link>
             <Link to="/News"><button className='navBtn'>NEWS</button></Link>
             <Link to="/About"><button className='navBtn'>ABOUT</button></Link>
             <Link to="/WritersPortal"><button className='navBtn'>PORTAL</button></Link>

        </div>
      <div id="rightLink">
        <Link to="/login"><button className='navBtn'>LOGIN</button></Link>
      </div>
    </div>

  );
};

export default Navbar;
