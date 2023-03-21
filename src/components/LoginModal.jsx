import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginModal() {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalState, setModalState] = useState("block");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    setIsLoggedIn(true);
  };

  return (
    <section>
      <div className="modal" style={{ display: [modalState] }}>
        <div className="modal-content">
          <span className="close-button">
            <Link to="/" style={{ textDecoration: "none", color: 'black'}}>
              &times;
            </Link>
          </span>
          <span className="login-greeting" style={{fontSize:'60px'}}>Welcome!</span><br></br>
          <span style={{fontSize:'30px'}}>please sign in</span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input
              className="input-group"
              type="text"
              placeholder="username"
              id="username"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              // value={user}
              required
              style={{marginTop: '20px'}}
            ></input>

            <label htmlFor="password"></label>
            <input
              className="input-group"
              type="password"
              placeholder="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              // value={password}
              required
            />
            <Link to="/WritersPortal"><button type="submit" className="btn-login">LOGIN</button></Link><br></br>
            <span id='toRegister'>Don't have an account? Sign up<button className="btn-register" ><Link to='/Registration'>here!</Link></button></span>
          </form>
        </div>
      </div>
    </section>
  );
}
