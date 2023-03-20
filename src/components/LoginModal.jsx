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

  const closeModal = () => {
    setModalState("none");
  };

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
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <h1 className="login-greeting">Welcome! Please login!</h1>

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

            <button type="submit" className="btn-login">
              <Link to="/WritersPortal">Sign</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
