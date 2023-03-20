import Client from '../services/api'

const BlogDelete = (id) => {
  Client.delete(`/api/posts/${id}`)
}

export default BlogDelete;

