const WritersPortal = () => {
  return (
    <div>
<<<<<<< Updated upstream
      <div id='pageContainer'> {/* ORANGE */}
        <div id='body'> {/* WHITE */}



          <section id='portalContainer'>
            <div id='bloggerWelcomeMsg'>Welcome BLOGGER NAME</div>
            <div id='bloggerPostList'>
              <h2 className='bloggerPostTitle'>BLOG POST TITLE HERE</h2>     {/* ONCLICK TO VIEW BLOG */} {/* SHOULD THESE BE LINKS??? */}
              <button className='bloggerBtns'>EDIT</button>
              <button className='bloggerBtns'>DELETE</button>
=======
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
>>>>>>> Stashed changes
            </div>
          </section>



        </div>
      </div>
  </div>
  
  
  
)};

export default WritersPortal;
