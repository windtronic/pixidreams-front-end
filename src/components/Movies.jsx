import { useEffect, useState } from "react";
import Client from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Movies = () => {
  let navigate = useNavigate();

  const showMovie = (movie) => {
    navigate(`${movie.userId}/${movie.id}`);
  };
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
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>BLOG HISTORY</span>
        </div>
        <section id="blogPostList">

          {movieContent.map((movie) => {
            return (
              <div className='contentContainer'>
                <div className="sectionTitle" style={{marginTop: ".8vw"}}>
                  <span>{movie.title}</span>
                </div>

                <div id="resultsContainer">
                  <div>
                    <img src={movie.image} alt="poster" className="poster"/>
                  </div>
                  <div id="movieSection">
                    
                    <div className='blurbText'>
                      <span>{movie.synopsis}</span>
                    </div>
                    <div>
                      <button className="smallBtn" onClick={() => showMovie(movie)}>READ MORE!</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Movies;
