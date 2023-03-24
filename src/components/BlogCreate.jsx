
import { useState } from "react";
import Client from "../services/api";

const BlogCreate = (props) => {
  let id = 5;
  const [createBlog, setCreateBlog] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    synopsis: "",
    review: "",
    image: "",
    user_id: id,
    contentId: props.movieContent.id
  });

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Client.post(`/api/posts/${id}`, formData);
    console.log(response.data);
    setCreateBlog(response.data);
  };

  return (
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>CREATE NEW BLOG</span>
        </div>

        <div className="blogWindow" style={{paddingTop:'30px'}}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="homeTitle" style={{}}>
              TITLE
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <div style={{justifyContent:'left'}}>
            <label htmlFor="synopsis" className="homeTitle">
              SYNOPSIS
            </label>
            </div>
            <br></br>
            <br></br>
            <textarea
              required
              id="synopsis"
              name="synopsis"
              value={formData.synopsis}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <br></br>
            <label htmlFor="review" className="homeTitle">
              REVIEW
            </label>
            <br></br>
            <br></br>
            <textarea
              required
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <br></br>
            <label htmlFor="image" className="homeTitle">
              IMAGE URL
            </label>
            <br></br>
            <br></br>
            <textarea
              required
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <button className="btnLarge" id="btn-create" type="submit">
              PUBLISH
            </button>
          </form>
          {createBlog && (
            <div>
              <h2>{createBlog.title}</h2>
              <p>{createBlog.synopsis}</p>
              <p>{createBlog.review}</p>
              <p>{createBlog.image}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;