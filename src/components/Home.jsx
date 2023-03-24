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

  const showDetails = (userId, moviesId) => {
    navigate(`/Movies/${userId}/${moviesId}`);
  };
  return (
    <div className="pageContainer">
      <div className="body">
        <div className="titleContainer">
          <div className="sectionTitle" style={{ marginTop: "50px" }}>
            <span>ABOUT</span>
          </div>
        </div>
        <div className="welcomeBlurbContainer">
          <div>
            <img
              src="https://i.imgur.com/5gvUh78.jpg"
              style={{ width: "50vw" }}
              alt="home img"
            ></img>
          </div>
          <div
            id="homeBlurb"
            style={{ textAlign: "center", marginRight: "1vw" }}
          >
            <h2 style={{ marginBottom: "30px" }}>
              Welcome to PixiDreams, the go-to movie blog for all things
              animated!
            </h2>
            <br></br>
            <h3>
              From timeless classics to the latest box office hits, PixiDreams
              offers thoughtful and insightful reviews that delve into
              thestorytelling, animation techniques, and themes that make each
              movie unique.
              <br></br>
              <br></br>
              We believe that animation is more than just entertainment - it's
              an art form that has the power to inspire and captivate audiences
              of all ages. That's why we're dedicated to sharing our passion for
              animated movies with our readers, and keeping them up-to-date on
              the latest news and trends in the world of animation.
            </h3>
            <br></br>
          </div>
        </div>

        <div className="titleContainer">
          <div className="sectionTitle" style={{ marginTop: "50px" }}>
            <span>LATEST</span>
          </div>
        </div>

        <div id="latestContainer" style={{ marginBottom: "50px" }}>
          {" "}
          {movies
            .map((movie, index) => (
              <div
                key={index}
                onClick={() => showDetails(movie.userId, movie.id)}
              >
                <img id="latestPoster" src={movie.image} alt="poster"></img>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};

export default Home;
