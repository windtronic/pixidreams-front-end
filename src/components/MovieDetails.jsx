import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([])
  const [singleComment, setSingleComment] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent[id]) {
        let selectedMovie = props.movieContent.find(
          (movie) => movie.id === parseInt(id)
        )
        setMovie(selectedMovie)
        console.log(selectedMovie)
      }
    }
    getSelectedMovie()
     
  }, [props.movieContent])





const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Submitted comment:', singleComment);
  };

   const handleChange = (event) => {
    event.preventDefault()
    setSingleComment(event.target.value);
  };

  
  // function handleLikeClick() {
  //   setLikes((prevLikes) => prevLikes + 1);
  // }

//  const singleComment = Client.get(`/api/comments/`)
//  console.log(singleComment)



const displayComments = () => {
  Client.get(`/api/comments/view/${id}`).then((response) => {
    setSingleComment(response.data)
  })
  
} 


useEffect(() => {
  displayComments()
}, [id])
  

  



  

 
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
          
          
          {singleComment.map((singleComment) => {
             return (
        
                <div key={singleComment.id}>
                  <div>
                  
                    {/* <button onClick={handleLikeClick}>
                      {comment.likes} 
                      {comment.likes === 1 ? "likes" : "like"}
                    </button> */}
                  </div>
                  <div>
                    <span>Comments:{singleComment.comment}</span>
                   
                  </div>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Add Comment:
                      <input
                        type="text"
                        value={singleComment.comment}
                        onChange={handleChange}
                      />
                    </label>
                    <button type="submit">Submit</button>
                    <p>Comment: {singleComment.comment}</p>
                  </form>
                </div>
             )
               })}    
            </div>
          </section>
        </div>
      </div>
    </div>
  );
                  
};

export default MovieDetails;
