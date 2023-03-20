import { useEffect, useState } from "react";
import Client from "../services/api";

const Movies = () => {
  const [moveieContent, setMovieContent] = useState([]);

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get(`/api/posts`);
      console.log(content);
      setMovieContent(content.data);
    };
    getContent();
  }, []);

  // useEffect(() => {
  //   const createContent = async (req, res) => {
  //     const content = await Client.post(`/api/posts/${req.id}`);
  //     console.log(content);
  //     setContent(content);
  //   };
  //   createContent();
  // }, []);

  return (
    <div>
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section id="historyContainer">
            <h2>BLOG HISTORY</h2>
            <div>
              {moveieContent.map((movie) => {
                return (
                  <div id="blogHistory">
                    <div>
                      <img src={movie.image} />
                    </div>
                    <div>
                      <span>Title: {movie.title}</span>
                    </div>
                    <div>
                      <span>Synopsis: {movie.synopsis}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Movies;
