import { useEffect, useState } from "react";
import Client from "../services/api";

const Movies = () => {
  const [getContent, setContent] = useState([]);

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get(`/api/posts`);
      console.log(content);
      setContent(content);
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

  return(
  <div>
    <div id='pageContainer'> {/* ORANGE */}
      <div id='body'> {/* WHITE */}



        <section id='historyContainer'>
          <h2>BLOG HISTORY</h2>
          <div id='blogHistory'>
              {/* BLOG HISTORY LIST */}
          </div>
        </section>



      </div>
    </div>
  </div>
)};

export default Movies;
