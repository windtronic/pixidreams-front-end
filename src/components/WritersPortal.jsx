import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const WritersPortal = (props) => {

  let navigate = useNavigate()

  const showMovie = (index) => {
    navigate(`${index}`)
  }

  return (
    <div>
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section id="portalContainer">
            <div id="bloggerWelcomeMsg">Welcome BLOGGER NAME</div>
            <div id="bloggerPostList">
              <div>
                {props.movieContent.map((movie, index) => {
                  return (
                    <div id="blogHistory" key={index}>
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
                        <button className="bloggerBtns">
                          <Link to="/create" style={{ textDecoration: "none" }}>
                            CREATE
                          </Link>
                        </button>
                        <button className="bloggerBtns" key={index} onClick={() => showMovie(index)}>EDIT</button>
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
