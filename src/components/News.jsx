import { useState, useEffect } from "react";
import { BASE_URL, POSTER_URL } from "../globals";
import Client from "../services/api";

const News = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1000);

  const animationId = 16; // TMDB genre id for animated movies
  const familyId = 10751; // TMDB genre id for family movies

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
  console.log(filterGenreId);
  // const filterFamilyId = movies.filter((x) => x.genre_ids.includes(10751));
  // console.log(filterFamilyId);

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">
            CHECK OUT THE LATEST IN ANIMATIONLAND!
          </span>
          <section id="contentContainer">
            <div id="newsFeed">
              {filterGenreId.map((movie, index) => {
                return (
                  <div key={index}>
                    <section>{movie.title}</section>
                    <section>
                      {" "}
                      <img src={POSTER_URL + movie.poster_path} alt="poster" />
                    </section>
                    <section>{movie.overview}</section>
                  </div>
                );
              })}
              {page > 1 && (
                <div>
                  <button onClick={() => setPage(page - 1)}>Previous</button>
                  <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
