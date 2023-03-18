import { useState, useEffect } from "react";
import { BASE_URL, POSTER_URL } from "../globals";
import Client from "../services/api";

const News = () => {
  const [movies, setMovies] = useState([]);
  const [respPages, setRespPages] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await Client.get(
        `${BASE_URL}api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      //console.log(response.data.results);
      //console.log(response.data.total_pages);
      setMovies(response.data.results);
      setRespPages(response.data.total_pages);
    };
    getMovies();
  }, []);

  return (
    <div>
      <section>
        <div>NEWS</div>
      </section>
      <section>
        <div>
          {movies.map((movie, index) => {
            return (
              <div key={index}>
                <section>{movie.title}</section>
                <section>
                  <img src={POSTER_URL + movie.poster_path} alt="poster" />
                </section>
                <section>{movie.overview}</section>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default News;
