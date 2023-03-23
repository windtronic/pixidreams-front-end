import "./App.css";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import Client from "./services/api";

import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import News from "./components/News";
import WritersPortal from "./components/WritersPortal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import BlogUpdate from "./components/BlogUpdate";
import BlogCreate from "./components/BlogCreate";
import RegistrationModal from "./components/RegistrationModal"


const App = () => {
  const [movieContent, setMovieContent] = useState([]);
  const [updateBlog, setUpdateBlog] = useState([]);
  const [formData, setFormData] = useState({ title: "", image: "", synopsis: "", review: "" });

  const { id } = useParams()
  let navigate = useNavigate()

  const getContent = () => {
    Client.get(`/api/posts`).then((getContent) => {
      setMovieContent(getContent.data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    Client.delete(`/api/posts/${id}`).then(() => {
      getContent();
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    Client.put(`/api/posts/${id}`, formData).then(() => {
      navigate('/WritersPortal')
      getContent()
    })
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
        <Route path="/WritersPortal" element={<WritersPortal movieContent={movieContent} handleDelete={handleDelete}/>}></Route>
        <Route path="/WritersPortal/:id" element={<BlogUpdate movieContent={movieContent} updateBlog={updateBlog} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>}></Route>
        <Route path="/Create" element={<BlogCreate />}></Route>
        <Route path="/LoginModal" element={<LoginModal />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
