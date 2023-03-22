import { useEffect, useState } from "react";
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
  }, [movieContent]);

  const showDetails = (index) => {
    navigate(`${index}`);
  };

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <div className="homeTitle">
            <span>ABOUT</span>
          </div>

          <div className="contentContainer">
            <div>
              <img></img>
            </div>
            <div id="homeBlurb">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas interdum, dui nec elementum auctor, elit sem sodales
                tortor, at bibendum ante nunc a quam. Pellentesque pharetra
                turpis ac nibh molestie, id semper tellus suscipit. Praesent in
                accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus
                commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent volutpat semper
                scelerisque.{" "}
              </h3>
            </div>
          </div>
          <div className="homeTitle">
            <span>LATEST</span>
          </div>
          <div className="latestContainer">
            {movies.map((movie, index) => {
              return (
                <div
                  id="posterCard"
                  key={index}
                  onClick={() => showDetails(index)}
                >
                  {movie.image ? (
                    <img
                      className="latestPoster"
                      alt="poster"
                      src={movie.image}
                    ></img>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
