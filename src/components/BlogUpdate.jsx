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
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>EDIT BLOG</span>
        </div>

        <div className="blogCreate">
          <form onSubmit={(e) => props.handleSubmit(e, id)}>
            <label htmlFor="title" className="homeTitle">
              TITLE
            </label><br></br><br></br>

            <input
              type="text"
              id="title"
              name="title"
              placeholder={movie.title}
              value={props.formData.title}
              onChange={props.handleChange}
              className="formInput"
            /><br></br><br></br>

            <label htmlFor="synopsis" className="homeTitle">
              SYNOPSIS
            </label><br></br><br></br>

            <textarea
              id="synopsis"
              name="synopsis"
              placeholder={movie.synopsis}
              value={props.formData.synopsis}
              onChange={props.handleChange}
              className="formTextArea"
            /><br></br><br></br>

            <label htmlFor="review" className="homeTitle">
              REVIEW
            </label><br></br><br></br>

            <textarea
              id="review"
              name="review"
              placeholder={movie.review}
              value={props.formData.review}
              onChange={props.handleChange}
              className="formTextArea"
            /><br></br><br></br>

            <button type="submit" className="btn-login" id="btn-create">
              UPDATE
            </button>

          </form>
          <div>
            <h2>{props.updateBlog.title}</h2>
            <p>{props.updateBlog.synopsis}</p>
            <p>{props.updateBlog.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdate;
