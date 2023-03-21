import { useState } from "react";
import Client from "../services/api";

const BlogCreate = (props) => {
  const [createBlog, setCreateBlog] = useState([]);
  const [formData, setFormData] = useState({ title: "", synopsis: "", review: "", image: ""});
  
  let id = 5

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Client.post(`/api/posts/${id}`, formData);
    console.log(response.data.title);
    setCreateBlog(response.data);
  };

  return (
    <div className="BlogCreate">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          id="synopsis"
          name="synopsis"
          value={formData.synopsis}
          onChange={handleChange}
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
        <label htmlFor="image">Image Address</label>
        <textarea
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange} />
        {/* <img alt="preview image" src={image}/>  */}
        
        
        
        <button type="submit">Create Blog Post</button>
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
  );
};

export default BlogCreate;
//test//