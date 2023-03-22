import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ movieContent }) => {
  const [movies, setMovies] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (movieContent) {
        let selectedMovie = movieContent;
        setMovies(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [movieContent, movies]);

  // for (let i = 0; i < 6; i++) {
  //   moviesArray.push(movies[i]);
  // }

  console.log(movies);

  const showDetails = (index) => {
    navigate(`${index}`);
  };

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <div className="titleContainer">
            <div className="homeTitle">
              <span>ABOUT</span>
            </div>
          </div>

          <div className="contentContainer">
            <div id="homeBlurb" style={{ textAlign: "right" }}>
              <br></br>
              <h3>
                Welcome to PixiDreams, the go-to movie blog for all things
                animated!
                <br></br>
                <br></br>
                From timeless classics to the latest box office hits, PixiDreams
                offers thoughtful and insightful reviews that delve into the
                storytelling, animation techniques, and themes that make each
                movie unique.
                <br></br>
                <br></br>
                We believe that animation is more than just entertainment - it's
                an art form that has the power to inspire and captivate
                audiences of all ages. That's why we're dedicated to sharing our
                passion for animated movies with our readers, and keeping them
                up-to-date on the latest news and trends in the world of
                animation.
              </h3>
              <br></br>
            </div>
            <div>
              <img
                src="https://wallpaper-house.com/data/out/8/wallpaper2you_278011.jpg"
                style={{ width: "50vw" }}
                alt="imagealttag"
              ></img>
            </div>
          </div>

          <div className="homeTitle">
            <span>LATEST</span>
          </div>

          <div id="latestContainer" style={{ marginBottom: "50px" }}>
            {" "}
            {/* ONCLICK FUNCTION NEEDED */}
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
            <div id="posterCard">
              <img className="latestPoster" alt="poster"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
