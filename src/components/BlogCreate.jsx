import { useEffect, useState } from "react";
import Client from "../services/api";


const BlogCreate = () => {
const [createBlog, setCreateBlog] = useState([])

useEffect(() => {
  const createBlogPost = async (req, res) => {
    const response = await Client.post(`/api/posts`);
    console.log(response.data);
    setCreateBlog(response.data);
  };
  createBlogPost();
}, []);





  return <div></div>;
};

export default BlogCreate;



