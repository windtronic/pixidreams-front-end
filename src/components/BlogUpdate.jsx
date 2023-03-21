import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const BlogUpdate = (props) => {

  const [movie, setMovie] = useState('')

  let { index } = useParams()

  useEffect(() => {
    let selectedMovie = props.movieContent[index]
    setMovie(selectedMovie)
  }, [])

  console.log(movie.title)

  return (
  <div>
    <h1>{movie.title}</h1>
  </div>
  )
};

export default BlogUpdate;