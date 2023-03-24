import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const MovieDetails = (props) => {
  const { userId, id } = useParams();
  const [movie, setMovie] = useState([null]);
  const [singleComment, setSingleComment] = useState([]);
  const [createComment, setCreateComment] = useState([]);
  const [likes, setLikes] = useState([]);
  const [reviewLike, setReviewLike] = useState(0);

  const [formData, setFormData] = useState({
    comment: "",
    likes: 0,
    userId: userId,
    contentId: id,
  });

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent.length > 0) {
        let selectedMovie = props.movieContent.find(
          (movie) => movie.id === parseInt(id)
        );
        setMovie(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [id, props.movieContent]);

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
      const likesCopy = prevLikes.map((like) =>
        like.commentId === commentId
          ? { commentId, count: like.count + 1 }
          : like
      );
      if (!likesCopy.some((like) => like.commentId === commentId)) {
        likesCopy.push({ commentId, count: 1 });
      }
      localStorage.setItem("likes", JSON.stringify(likesCopy));
      return likesCopy;
    });
  }

  // function handleLikeClick(commentId) {
  //   setLikes((prevLikes) => {
  //     const likesCopy = [...prevLikes];
  //     const commentLikesIndex = likesCopy.findIndex(
  //       (like) => like.commentId === commentId
  //     );
  //     if (commentLikesIndex === -1) {
  //       likesCopy.push({ commentId, count: 1 });
  //     } else {
  //       likesCopy[commentLikesIndex].count++;
  //     }
  //     localStorage.setItem("likes", JSON.stringify(likesCopy));
  //     return likesCopy;
  //   });
  // }

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
    const response = await Client.post(`/api/comments/${userId}`, formData);

    setSingleComment(response.data);
    displayComments();
    setFormData({ ...formData, comment: "" });

    console.log("Submitted comment:", singleComment);
  };

  const displayComments = async () => {
    const response = await Client.get(`/api/comments/view/${userId}`);
    setSingleComment(response.data);
    setCreateComment(response.data);
  };

  useEffect(() => {
    displayComments();
  }, [id]);

  return (
    <div className="pageContainer">
      <div className="body">
        <div className="blogWindow" id="blogPost">
          <div className="pageTitle">
            <span style={{ fontSize: "40px" }}>{movie.title}</span>
          </div>

          <div className="contentContainer" id="movieInfo">
            <div id="resultsContainer">
              <div>
                <img
                  src={movie.image}
                  alt="poster"
                  // style={{ width: "14vw", minWidth: "200px" }}
                  className="blogPostImg"
                  id="posterCard"
                />
              </div>
              <div>
                <span>SYNOPSIS</span>
                <br></br>
                <span>{movie.synopsis}</span>
              </div>
            </div>

            <div className="contentContainer" id="movieReview">
              <span>REVIEW</span>
              <br></br>
              <span>{movie.review}</span>
              <br></br>
            </div>
          </div>

          <div>
            <span>LIKES</span>
            <br></br>
            <span style={{ marginRight: "8px" }}>{reviewLike}</span>
            <button className="likeBtn" onClick={() => handleReviewLike()}>
              🖤
            </button>
          </div>

          <section>
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
                        <span>{comment.comment}</span>
                      </div>
                      <div>
                        <span style={{ marginRight: "8px" }}>
                          {commentLikes ? commentLikes.count : 0}
                        </span>
                        <button
                          className="likeBtn"
                          onClick={() => handleLikeClick(comment.id)}
                        >
                          🖤
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="comment"></label>
                <input
                  type="text"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                />
                <br />
                <button type="submit">COMMENT</button>
              </form>
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
