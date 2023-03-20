import { useEffect, useState } from "react";
import Client from "../services/api";
import { useNavigate } from 'react-router-dom'
import BlogDelete from './BlogDelete'
import refresh from './BlogDelete'

const WritersPortal = () => {
  const [movieContent, setMovieContent] = useState([]);

  let navigate = useNavigate()

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get(`/api/posts`);
      console.log(content);
      setMovieContent(content.data);
    };
    getContent();
  }, []);

  const handleDelete = (id) => {
    Client.delete(`/api/posts/${id}`)
    const content = Client.get(`/api/posts`)
    setMovieContent(content.data)
  }

  return (
    <div>
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section id="portalContainer">
            <div id="bloggerWelcomeMsg">Welcome BLOGGER NAME</div>
            <div id="bloggerPostList">
            <div>
              {movieContent.map((movie) => {
                console.log(movie.id)
                return (
                  <div id="blogHistory">
                    <div>
                      <span>
                        <img src={movie.image} alt="poster" />
                      </span>
                    </div>
                    <div>
                      <span>Title: {movie.title}</span>
                    </div>
                    <div>
                      <span>Synopsis: {movie.synopsis}</span>
                    </div>
                    <div>
                      <button className="bloggerBtns">EDIT</button>
                      <button className="bloggerBtns" onClick={() => handleDelete(movie.id)}>DELETE</button>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WritersPortal;
