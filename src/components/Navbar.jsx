import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="centerLinks">
        <Link to="/"><button className='navBtn'>HOME</button></Link>
        <Link to="/Movies"><button className='navBtn'>MOVIES</button></Link>
        <Link to="/News"><button className='navBtn'>NEWS</button></Link>
        <Link to="/About"><button className='navBtn'>ABOUT</button></Link>
      </div>
      <div id="loginBtn">
      <Link to="/LoginModal"><button className='navBtn'>LOGIN</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
