import { useEffect, useState } from "react";
import Client from "../services/api";
import { useNavigate, Link } from 'react-router-dom'

const Movies = () => {
  let navigate = useNavigate();

  const showMovie = (movie) => {
    navigate(`${movie.id}`)
  }
  const [movieContent, setMovieContent] = useState([]);

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get(`/api/posts`);
      console.log(content);
      setMovieContent(content.data);
    };
    getContent();
  }, []);

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">BLOG HISTORY</span>

          <section id="contentContainer">
            <div>
              {movieContent.map((movie, index) => {
                return (
                  <div id="blogHistory" key={movie.id} onClick={() => showMovie(movie)}>
                    <div>
                        <img src={movie.image} alt="poster" />
                    </div>
                    <div>
                      <span>Title: {movie.title}</span>
                    </div>
                    <div>
                      <span>Synopsis: {movie.synopsis}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Movies;
