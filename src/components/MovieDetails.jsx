import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);

const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the comment, like sending it to a server or updating state
    console.log('Submitted comment:', comment);
  };

   const handleChange = (event) => {
    event.preventDefault()
    setComment(event.target.value);
  };

  
  function handleLikeClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await Client.get(`/api/posts/`);
      setMovieDetails(data);
      setLikes(data.likes);
      
    };
    getData();
  }, [id]);

//   useEffect(() => {
//     const displayComments = async () => {
//       const comment = await Client.get(`/api/comments/`);
//       console.log(comment)
//       setComment(comment);
//     };
  
//     displayComments();
//   }, []);

// const displayComments = async () => {
//   try {
//     const comment = await Client.get(`/api/comments/`);
//     console.log(comment)
//     setComment(comment);
//   } catch (error) {
//     console.error(error);
//   }
// };
  
  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">Movie Details</span>
          <section id="contentContainer">
            {movieDetails.map((movie) => {
              return (
                <div key={movie.id}>
                  <div>
                    <span>Review: {movie.review}</span>
                  </div>
                  <div>
                    <span>Likes: {movie.likes}</span>
                    <button onClick={handleLikeClick}>
                      {likes} {likes === 1 ? "like" : "like"}
                    </button>
                  </div>
                  <div>
                    <span>Comments:{movie.comments}</span>
                   
                  </div>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Add Comment:
                      <input
                        type="text"
                        value={comment}
                        onChange={handleChange}
                      />
                    </label>
                    <button type="submit">Submit</button>
                    <p>Comment: {comment}</p>
                  </form>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
