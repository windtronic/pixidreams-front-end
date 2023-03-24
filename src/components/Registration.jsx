// import { useState } from "react";
// import Client from "../services/api";

// const Registration = () => {
    
// //       const [modalState, setModalState] = useState("block")
// //       const hideModal = () => { setModalState('none')}
    
// //   const [newUser, setNewUser] = useState([]);
// //   const [formValues, setFormValues] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });


// //   const handleChange = (e) => {
// //     setFormValues({ ...formValues, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await Client.post(`/api/*******/`, formValues);
// //     console.log(response.data.username);
// //     setNewUser(response.data);
// //   };



//   return (
    
//     <section>
//         <div className="modal" style={{ display: [modalState] }}>
//         <div className="modal-content">
//           <span className="close-button">
//             <Link to="/" style={{ textDecoration: "none", color: 'black'}}>
//               &times;
//             </Link>
//         </span>
//         </div>
//         </div>


//       <div className="pageContainer">
//         <div className="body">
//           <div>
//             <div className="pageTitle"><span>SIGN UP</span>

//             <div className="registrationContainer">
//               <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">USERNAME:</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={formValues.username}
//                 //   onChange={handleChange}
//                 /><br></br>

//                 <label htmlFor="email">EMAIL:</label>
//                 <textarea
//                   id="email"
//                   name="email"
//                   value={formValues.email}
//                 //   onChange={handleChange}
//                 /><br></br>

//                 <label htmlFor="password">PASSWORD:</label>
//                 <textarea
//                   id="password"
//                   name="password"
//                   value={formValues.review}
//                 //   onChange={handleChange}
//                 /><br></br>

//                 <label htmlFor="confPassword">CONFIRM PASSWORD:</label>
//                 <textarea
//                 id="password"
//                 name="confirmPassword"
//                 value={formValues.confirmPassword}
//                 // onChange={handleChange} 
//                 /><br></br>

//                 <button type="submit">REGISTER</button>
//               </form>
//               {newUser && (
//                 <div>
//                   <h2>{newUser.username}</h2>
//                   <p>{newUser.synopsis}</p>
//                   <p>{newUser.review}</p>
//                   <p>{newUser.image}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>

//   );
// };

// export default Registration;
