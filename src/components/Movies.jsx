import { useEffect, useState } from "react";
import Client from "../services/api";
import { useNavigate } from 'react-router-dom'

const Movies = () => {
  const [movieContent, setMovieContent] = useState([]);

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

      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">BLOG HISTORY</span>
          
          <section className="contentContainer">
              {movieContent.map((movie) => {

                return (
                  <div id="blogHistory">

                    <div style={{marginRight:'20px', marginBottom: '20px'}}>
                      <img src={movie.image} alt="poster" style={{width:'14vw', minWidth: '200px'}}/>
                    </div>

                  <div> 
                    <div style={{backgroundColor:'#21997f'}}>
                      <span style={{fontSize: '28px'}}>Title: {movie.title}</span>
                    </div>
                    
                    <div>
                      <div style={{margin: '20px', fontSize:'20px'}}>
                        <span>Synopsis: {movie.synopsis}</span>
                      </div>
                    </div>

                    <div>
                      <button className="btn-login" id='btn-create' style={{justifyContent: 'right'}}>READ MORE!</button>
                    </div>
                    
                  </div>
                </div>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Movies;