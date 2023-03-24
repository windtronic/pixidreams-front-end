import { useState, useEffect } from "react";
import { BASE_URL, POSTER_URL } from "../globals";
import Client from "../services/api";
import LoginModal from "./LoginModal";

const News = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1000);

  useEffect(() => {
    const getMovies = async () => {
      const response = await Client.get(
        `${BASE_URL}api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      );
      setMovies(response.data.results);
      console.log(movies);
    };
    getMovies();
  }, [page]);

  // filter for id's
  const filterGenreId = movies
    .filter((x) => x.genre_ids.includes(16))
    .filter((y) => y.genre_ids.includes(10751));

  return (
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>CHECK OUT THE LATEST IN ANIMATIONLAND!</span>
        </div>
        <section id="newsFeed">

            {filterGenreId.map((movie, index) => {
              return (
                <div key={index} className='contentContainer'>
                  <div className="sectionTitle" style={{marginTop: "1vw" }}>
                    <span>{movie.title}</span>
                  </div>

                  <div id="resultsContainer" style={{ marginTop: ".2vw"}}>
                    <div>
                      <img
                        className="poster"
                        src={POSTER_URL + movie.poster_path}
                        alt="newsPoster"
                        style={{ width: "20vw" }}
                      />
                    </div>
                    <div id="movieSection" style={{ textAlign: "left", marginRight: "1vw" }}>
                      <div className='blurbText'>
                        {movie.overview}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {page > 1 && (
              <div>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
              </div>
            )}
        </section>
      </div>
    </div>
  );
};

export default News;
