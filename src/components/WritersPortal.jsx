import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const WritersPortal = (props) => {

  let navigate = useNavigate()

  const showMovie = (index) => {
    navigate(`${index}`)
  }
  
  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <div className='pageTitle'>Welcome BLOGGER NAME</div>
          <section className="contentContainer">
            <div id="bloggerPostList">
              <div>
                {props.movieContent.map((movie, index) => {
                  return (
                    <div id="blogHistory" key={index}>
                        <span>
                          <img src={movie.image} alt="poster" />
                        </span>
                        <span>Title: {movie.title}</span>
                        <span>Synopsis: {movie.synopsis}</span>
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
