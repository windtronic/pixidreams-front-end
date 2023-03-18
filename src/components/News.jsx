import { useState } from "react";
import { BASE_URL } from "../globals";

const News = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  return (
    <div>
      <section>
        <div>News</div>
      </section>
      <section>
        <div>Data goes here...</div>
      </section>
    </div>
  );
};

export default News;
