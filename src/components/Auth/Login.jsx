import { useState } from "react";
import { SignInUser } from "../../services/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
        <div className='titleContainer'>
          <div className="homeTitle"><span>ABOUT</span></div></div>

          <div className='contentContainer'>
            <div id="homeBlurb" style={{textAlign: 'right'}}><br></br>
              <h3>Welcome to PixiDreams, the go-to movie blog for all things animated! 
                  <br></br><br></br>
                  From timeless classics to the latest box office hits, PixiDreams offers thoughtful and insightful reviews that delve into the storytelling, animation techniques, and themes that make each movie unique. 
                  <br></br><br></br>
                  We believe that animation is more than just entertainment - it's an art form that has the power to inspire and captivate audiences of all ages. That's why we're dedicated to sharing our passion for animated movies with our readers, and keeping them up-to-date on the latest news and trends in the world of animation.</h3><br></br>
            </div>
            <div>
              <img src='https://i.imgur.com/5gvUh78.jpg' style={{width: '50vw'}}></img>
            </div>
          </div>

          <div className="homeTitle"><span>LATEST</span></div>

          <div id="latestContainer" style={{marginBottom: '50px'}}>         {/* ONCLICK FUNCTION NEEDED */}
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div> 
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
          </div>
        </div>
      </div>
    </div>
  )


//   let navigate = useNavigate();
//   const [formValues, setFormValues] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = await SignInUser(formValues);
//     setFormValues({ email: "", password: "" });
//     props.setUser(payload);
//     props.toggleAuthenticated(true);
//     navigate("/feed");
//   };

//   return (
//     <div className="signin col">
//       <div className="card-overlay centered">
//         <form className="col" onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={handleChange}
//               name="email"
//               type="email"
//               placeholder="example@example.com"
//               value={formValues.email}
//               required
//             />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="password"
//               value={formValues.password}
//               required
//             />
//           </div>
//           <button disabled={!formValues.email || !formValues.password}>
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
};

export default Login;
