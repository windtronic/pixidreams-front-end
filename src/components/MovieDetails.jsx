import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [singleComment, setSingleComment] = useState([]);
  const [createComment, setCreateComment] = useState([]);
  const [likes, setLikes] = useState([]);
  const [reviewLike, setReviewLike] = useState(0);

  const [formData, setFormData] = useState({
    comment: "",
    likes: 0,
    userId: props.movieContent.userId,
    contentId: id,
  });

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

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, []);

  function handleLikeClick(commentId) {
    setLikes((prevLikes) => {
      const likesCopy = [...prevLikes];
      const commentLikesIndex = likesCopy.findIndex(
        (like) => like.commentId === commentId
      );
      if (commentLikesIndex === -1) {
        likesCopy.push({ commentId, count: 1 });
      } else {
        likesCopy[commentLikesIndex].count++;
      }
      localStorage.setItem("likes", JSON.stringify(likesCopy));
      return likesCopy;
    });
  }

  useEffect(() => {
    const storedLike = localStorage.getItem("reviewLike");
    if (storedLike) {
      setReviewLike(parseInt(storedLike));
    }
  }, []);

  function handleReviewLike() {
    let like = reviewLike + 1;
    setReviewLike(like);
    localStorage.setItem("reviewLike", like);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Client.post(`/api/comments/${id}`, formData);
    setSingleComment(response.data);
    displayComments();
    setFormData({ ...formData, comment: "" });
    console.log("Submitted comment:", singleComment);
  };

  const displayComments = async () => {
    const response = await Client.get(`/api/comments/view/${id}`);
    setSingleComment(response.data);
    setCreateComment(response.data);
  };

  useEffect(() => {
    displayComments();
  }, [id]);

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">{movie.title}</span> <br></br>
          <section id="contentContainer">
            <div>
              <span>Review: {movie.review}</span>
              <br></br>
            </div>
            <div>
              <span>Likes: {reviewLike}</span>
              <button onClick={() => handleReviewLike()}>Like</button>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Add Comment:</label>
                <input
                  type="text"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div>
              {singleComment &&
                Array.isArray(singleComment) &&
                singleComment.map((comment) => {
                  const commentLikes = likes.find(
                    (like) => like.commentId === comment.id
                  );
                  return (
                    <div key={comment.id}>
                      <div>
                        <span>Comments: {comment.comment}</span>
                      </div>
                      <div>
                        <span>
                          Likes: {commentLikes ? commentLikes.count : 0}
                        </span>
                        <button onClick={() => handleLikeClick(comment.id)}>
                          Like
                        </button>
                      </div>
                    </div>
                  );
                })}
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
};

export default MovieDetails;
