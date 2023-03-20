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

  // Call getContent() to reload page
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
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section id="portalContainer">
            <div id="bloggerWelcomeMsg">Welcome BLOGGER NAME</div>
            <div id="bloggerPostList">
              <h2 className="bloggerPostTitle">BLOG POST TITLE HERE</h2>{" "}
              {/* ONCLICK TO VIEW BLOG */} {/* SHOULD THESE BE LINKS??? */}
              <button className="bloggerBtns">EDIT</button>
              <button className="bloggerBtns">DELETE</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WritersPortal;
