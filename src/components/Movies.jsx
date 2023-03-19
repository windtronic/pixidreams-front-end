import { useEffect, useState } from "react";
import Client from "../services/api";

const Movies = () => {
  const [getContent, setContent] = useState([]);

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get("/");
    };
  });

  return <div>Movies</div>;
};

export default Movies;
