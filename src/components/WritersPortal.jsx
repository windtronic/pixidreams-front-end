import Client from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

const WritersPortal = (props) => {
  let navigate = useNavigate();

  const showMovie = (movie) => {
    navigate(`${movie.id}`);
  };

  return (
    <div>
      {/* <div>
        <LoginModal/>
      </div> */}
      <div className="pageContainer">
        <div className="body">
          <div className="pageTitle">WELCOME BLOGGER!</div>
          <div className="contentContainer">
            <Link to="/create">
              <button className="btn-login" id="btn-create">
                CREATE
              </button>
            </Link>
            <br></br>

            <section id="bloggerPostList">
              {props.movieContent.map((movie) => {
                return (
                  <div id="resultsContainer" key={movie.id}>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                      <img
                        src={movie.image}
                        alt="poster"
                        style={{ width: "14vw", minWidth: "200px" }}
                      />
                    </div>
                    <div>
                      <div>
                        <span>{movie.title}</span>
                      </div>

                      <div>
                        <span>SYNOPSIS</span>
                        <br></br>
                        <span>{movie.synopsis}</span>
                      </div>

                      <div>
                        <span>REVIEW</span>
                        <br></br>
                        <span>{movie.review}</span>
                      </div>

                      <div>
                        <button
                          className="btn-login"
                          id="btn-create"
                          key={movie.id}
                          onClick={() => showMovie(movie)}
                        >
                          EDIT
                        </button>
                        <button
                          className="btn-login"
                          id="btn-create"
                          onClick={() => props.handleDelete(movie.id)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritersPortal;
