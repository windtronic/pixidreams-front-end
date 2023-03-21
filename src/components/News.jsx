import { useState, useEffect } from "react";
import { BASE_URL, POSTER_URL } from "../globals";
import Client from "../services/api";

const News = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1000);
  const [totalResults, setTotalResults] = useState(20000);

  let page = 1;
  // const animationId = 16; TMDB genre id for animated movies

  useEffect(() => {
    const getMovies = async () => {
      const response = await Client.get(
        `${BASE_URL}api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      );
      //console.log(response.data.results);
      //console.log(response.data.total_pages);
      setMovies(response.data.results);
    };
    getMovies();
  }, []);


  return (
    <div>
      <div className='pageContainer'> 
        <div className='body'> 
        <span className="pageTitle">CHECK OUT THE LATEST IN ANIMATIONLAND!</span>

          <section id='contentContainer'>
            <div id='newsFeed'>
              {movies.map((movie, index) => {
                return (
                  <div key={index}>
                    <section>{movie.title}</section>
                    <section> <img src={POSTER_URL + movie.poster_path} alt="poster" /></section>
                    <section>{movie.overview}</section>
                  </div>
                  );
                })}
            </div>
          </section>



        </div>
      </div>
    </div>
)}

    export default News;
    
