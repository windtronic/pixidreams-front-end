import { useEffect, useState } from "react";
import Client from "../services/api";

const WritersPortal = () => {
  const [movieContent, setMovieContent] = useState([]);

  // useEffect(() => {
  //   const getContent = async (req, res) => {
  //     const content = await Client.get(`/api/posts`);
  //     console.log(content);
  //     setMovieContent(content.data);
  //   };
  //   getContent();
  // }, []);

  const getContent = () => {
    Client.get(`/api/posts`).then((getContent) => {
      setMovieContent(getContent.data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleDelete = (id) => {
    Client.delete(`/api/posts/${id}`).then(() => {
      getContent();
    });
  };

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <div className='pageTitle'>Welcome BLOGGER NAME</div>

          <section className="contentContainer">
            <div id="bloggerPostList">

              <div className='contentContainer'>
                {movieContent.map((movie, index) => {
                  return (
                    <div id="blogHistory" key={index}>
                        <span>
                          <img src={movie.image} alt="poster" />
                        </span>
                        <span>Title: {movie.title}</span>
                        <span>Synopsis: {movie.synopsis}</span>
                      <div>
                        <button className="bloggerBtns">EDIT</button>
                        <button
                          className="bloggerBtns"
                          onClick={() => handleDelete(movie.id)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WritersPortal;
