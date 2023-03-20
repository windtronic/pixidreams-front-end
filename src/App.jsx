import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from './components/Header'
import Navbar from "./components/Navbar";

import About from "./components/About";
import Movies from "./components/Movies";
import News from "./components/News";
import Login from "./components/Auth/Login";
import WritersPortal from './components/WritersPortal'
import LoginModal from './components/LoginModal'
import Footer from './components/Footer'   


const App = () => {
  return (
    <div className="App">

      <Header/>
      <Navbar/>
      <Home/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Movies" element={<Movies/>}></Route>
          <Route path="/News" element={<News/>}></Route>
          <Route path ="/LoginModal" element={<LoginModal/>}></Route>
          <Route path ="/WritersPortal" element={<WritersPortal/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      <Footer/>

    </div>
  );
};

export default App;
