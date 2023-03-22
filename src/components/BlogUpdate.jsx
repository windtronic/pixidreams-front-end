import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const BlogUpdate = (props) => {
  const [movie, setMovie] = useState({ title: "" });

  let { index } = useParams();

  useEffect(() => {
    const getSelectedMovie = async () => {
      if (props.movieContent && props.movieContent[index]) {
        let selectedMovie = props.movieContent[index];
        setMovie(selectedMovie);
      }
    };
    getSelectedMovie();
  }, [props.movieContent, index]);

  return <div>{movie && <h1>{movie.title}</h1>}</div>;
};

export default BlogUpdate;