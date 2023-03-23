import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const BlogUpdate = (props) => {

  const [movie, setMovie] = useState('')

  let { id } = useParams()

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent[id]) {
        let selectedMovie = props.movieContent.find(
          (movie) => movie.id === parseInt(id)
        );
        setMovie(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [props.movieContent]);

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, id)}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder={movie.title}
          value={props.formData.title}
          onChange={props.handleChange}
        />
        <label htmlFor="synopsis">Synopsis:</label>
        <input
          type="text"
          id="synopsis"
          name="synopsis"
          placeholder={movie.synopsis}
          value={props.formData.synopsis}
          onChange={props.handleChange}
        />
        <label htmlFor="review">Review:</label>
        <input
          type="text"
          id="review"
          name="review"
          placeholder={movie.review}
          value={props.formData.review}
          onChange={props.handleChange}
        />
        <button type="submit">Update</button>
      </form>
      <div>
        <h2>{props.updateBlog.title}</h2>
        <p>{props.updateBlog.synopsis}</p>
        <p>{props.updateBlog.review}</p>
      </div>
    </div>
  );
};

export default BlogUpdate;
