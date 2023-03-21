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
<<<<<<< Updated upstream
          {/* <Link to="/Learn" element={<Learn/>}><button className="navBtn" id="learnBtn">learn</button></Link> */}
             <Link to="/" element={<Home/>}><button className='navBtn'>HOME</button></Link>
             <Link to="/Movies" element={<Movies/>}><button className='navBtn'>MOVIES</button></Link>
             <Link to="/News" element={<News/>}><button className='navBtn'>NEWS</button></Link>
             <Link to="/About" element={<About/>}><button className='navBtn'>ABOUT</button></Link>
        </div>
        <div id="rightLink">
             <Link to="/LoginModal" element={<LoginModal/>}><button className='navBtn'>LOGIN</button></Link>

        </div>

=======
             <Link to="/"><button className='navBtn'>HOME</button></Link>
             <Link to="/Movies"><button className='navBtn'>MOVIES</button></Link>
             <Link to="/News"><button className='navBtn'>NEWS</button></Link>
             <Link to="/About"><button className='navBtn'>ABOUT</button></Link>
             <Link to="/WritersPortal"><button className='navBtn'>PORTAL</button></Link>

        </div>
      <div id="rightLink">
        <Link to="/login"><button className='navBtn'>LOGIN</button></Link>
      </div>
>>>>>>> Stashed changes
    </div>

  );
};

export default Navbar;
