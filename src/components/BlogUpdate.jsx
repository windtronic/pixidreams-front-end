import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Client from "../services/api";

const BlogUpdate = (props) => {

  // const [updateBlog, setUpdateBlog] = useState([]);
  // const [formData, setFormData] = useState({ title: "", image: "", synopsis: "", review: "" });
  const [movie, setMovie] = useState('')

  let { id } = useParams()
  // let id = 4

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent[id]) {
        let selectedMovie = props.movieContent.find(
          (movie) => movie.id === parseInt(id)
        )
        setMovie(selectedMovie)
      }
    }
    getSelectedMovie()
  }, [props.movieContent])

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await Client.put(`/api/posts/${id}`, formData);
  //   console.log(response.data);
  //   setUpdateBlog(response.data);
  // };

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
  )
};

export default BlogUpdate;
