import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Home = ({ movieContent }) => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (movieContent) {
        let selectedMovie = movieContent;
        setMovies(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [movieContent]);

  const showDetails = (moviesId) => {
    navigate(`/Movies/${moviesId}`);
  };
  return (
    <div className="pageContainer">
      <div className="body" id="homeBody">
        <div className="welcomeContainer" style={{justifySelf: "center", justifyContent:"right", marginTop: '40px'}}>
          <span className="homeTitle">ABOUT</span>
          <div>
            <img
              src="https://i.imgur.com/xnew1rg.jpg"
              style={{ width: "51vw", marginTop: '1vw' }}
              alt="home-img"
            ></img>
          </div>
          <div id="homeBlurb">
            <h2>Welcome to PixiDreams, the go-to movie blog for all things animated!</h2>
            <h3 style={{ marginBottom: "3vw", paddingLeft:"3vw" }}>
              From timeless classics to the latest box office hits, PixiDreams offers thoughtful and insightful reviews that delve into thestorytelling, animation techniques, and themes that make each movie unique. <br></br><br></br>
              We believe that animation is more than just entertainment - it's an art form that has the power to inspire and captivate audiences of all ages. That's why we're dedicated to sharing our passion for animated movies with our readers, and keeping them up-to-date on the latest news and trends in the world of animation.
            </h3>
          </div>
          <div className="welcomeContainer" style={{justifySelf: "center", justifyContent:"left"}}>
            <span className="homeTitle">LATEST</span>
          </div>
        </div>


        <div id="latestContainer">
          {movies
            .map((movie, index) => (
              <div key={index} onClick={() => showDetails(movie.id)}>
                <img
                  id="latestPoster"
                  src={movie.image}
                  alt="poster"
                ></img>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};

export default Home;
