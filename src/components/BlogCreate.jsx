import { useState } from "react";
import Client from "../services/api";

const BlogCreate = (props) => {
  const [createBlog, setCreateBlog] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Client.post(`/api/posts`, formData);
    console.log(response.data);
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
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">Create Blog Post</button>
      </form>
      {createBlog && (
        <div>
          <h2>{createBlog.title}</h2>
          <p>{createBlog.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogCreate;
