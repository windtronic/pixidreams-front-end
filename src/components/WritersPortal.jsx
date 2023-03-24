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
      <div className="pageContainer">
        <div className="body">
          <div className="pageTitle">WELCOME BLOGGER!</div>
          <div className="contentContainer" style={{justifyContent:'center'}}>
            <Link to="/create">
              <button id="btn-create" className="btnLarge">CREATE</button>
            </Link>
            <br></br>

            <section id="bloggerPostList">
              {props.movieContent.map((movie) => {
                return (
                  <div id="resultsContainer" key={movie.id} style={{  borderBottom: 'none', borderTop: '2px solid'}}>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                      <img
                        src={movie.image}
                        alt="poster"
                        className='poster'
                      />
                    </div>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                      <div className="sectionTitle" style={{marginTop: ".8vw"}}>
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
                          className="bloggerBtn"
                          id="btn-edit"
                          key={movie.id}
                          onClick={() => showMovie(movie)}
                        >
                          EDIT
                        </button>
                        <button
                          className="bloggerBtn"
                          id="btn-delete"
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
