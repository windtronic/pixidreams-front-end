const WritersPortal = () => {
  return (
    <div>
      <div id='pageContainer'> {/* ORANGE */}
        <div id='body'> {/* WHITE */}



          <section id='portalContainer'>
            <div id='bloggerWelcomeMsg'>Welcome BLOGGER NAME</div>
            <div id='bloggerPostList'>
              <h2 className='bloggerPostTitle'>BLOG POST TITLE HERE</h2>     {/* ONCLICK TO VIEW BLOG */} {/* SHOULD THESE BE LINKS??? */}
              <button className='bloggerBtns'>EDIT</button>
              <button className='bloggerBtns'>DELETE</button>
            </div>
          </section>



        </div>
      </div>
  </div>
  
  
  
)};

export default WritersPortal;
