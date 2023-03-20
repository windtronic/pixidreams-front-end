import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "./services/api";

import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import News from "./components/News";
import Login from "./components/Auth/Login";
import WritersPortal from "./components/WritersPortal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import BlogUpdate from "./components/BlogUpdate";

const App = () => {

  const [movieContent, setMovieContent] = useState([]);

  const getContent = () => {
    Client.get(`/api/posts`).then((getContent) => {
      setMovieContent(getContent.data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleDelete = (id) => {
    Client.delete(`/api/posts/${id}`).then(() => {
      getContent();
    });
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/News" element={<News />}></Route>
        {/* <Route path ="/LoginModal" element={<LoginModal/>}></Route> */}
        <Route path="/WritersPortal" element={<WritersPortal movieContent={movieContent} handleDelete={handleDelete}/>}></Route>
        <Route path="/WritersPortal/:index" element={<BlogUpdate movieContent={movieContent}/>}></Route>
        <Route path="/Login" element={<LoginModal />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
