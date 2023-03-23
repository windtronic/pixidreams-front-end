import Client from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

const WritersPortal = (props) => {
  let navigate = useNavigate();

  const showMovie = (movie) => {
    navigate(`${movie.id}`)
  }

  return (
    <div>
      {/* <div>
        <LoginModal/>
      </div> */}
      <div className="pageContainer">
        <div className="body">
          <div className='pageTitle'>WELCOME BLOGGER!</div>
          <section className="contentContainer">
            <Link to="/create"><button className="btn-login" id='btn-create'>CREATE</button></Link><br></br>
            <div id="bloggerPostList">
              <div>
                {props.movieContent.map((movie) => {
                  return (
                    <div id="blogHistory" key={movie.id}>
                      <div>
                        <span>
                          <img src={movie.image} alt="poster" />
                        </span>
                      </div>
                      <div>
                        <span>Title: {movie.title}</span>
                      </div>
                      <div>
                        <span>Synopsis: {movie.synopsis}</span>
                      </div>
                      <div>
                        <span>Review: {movie.review}</span>
                      </div>
                      <div>
                        <button className="bloggerBtns" key={movie.id} onClick={() => showMovie(movie)}>EDIT</button>
                        <button
                          className="bloggerBtns"
                          onClick={() => props.handleDelete(movie.id)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WritersPortal;
