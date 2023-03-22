import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [singleComment, setSingleComment] = useState([]);
  const [createComment, setCreateComment] = useState([])
  const [likes, setLikes] = useState(0);

 

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent[id]) {
        let selectedMovie = props.movieContent.find(
          (movie) => movie.id === parseInt(id)
        );
        setMovie(selectedMovie);
        console.log(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [props.movieContent]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted comment:", singleComment);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSingleComment(event.target.value);
  };

  function handleLikeClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  //  const singleComment = Client.get(`/api/comments/`)
  //  console.log(singleComment)

  const displayComments = () => {
    Client.get(`/api/comments/view/${id}`).then((response) => {
      setSingleComment(response.data)
      setCreateComment(response.data)
    });
  };

  useEffect(() => {
    displayComments();
  }, [id]);

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">Movie Details</span>
          <section id="contentContainer">
            <div>
              <span>Review: {movie.review}</span>
            </div>
            <div>
              <span>Likes: {movie.likes}</span>
              <button onClick={handleLikeClick}>
                {movie.likes === 1 ? "likes" : "like"}
              </button>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="comment">
                  Add Comment: 
                </label>
                <input
                  type="text"
                  id="comment"
                  value={singleComment.comment}
                  onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div>
              {singleComment.map((comment) => (
                <div key={comment.id}>
                  <div>
                    <span>Comments: {comment.comment}</span>
                  </div>
                  <div>
                    <button onClick={() => handleLikeClick(comment)}>
                      {comment.likes === 1 ? "1 like" : `${comment.likes} likes`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {createComment && (
              <div>
                <p>{createComment.comment}</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
  
  
              } 

export default MovieDetails;
