const Home = () => {
  return (
    <div>
<<<<<<< Updated upstream
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section className="contentContainer">
            <h2 id="introTitle">About PixiDreams</h2>
            <img></img>
            <h3 id="aboutBlurb">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              interdum, dui nec elementum auctor, elit sem sodales tortor, at
              bibendum ante nunc a quam. Pellentesque pharetra turpis ac nibh
              molestie, id semper tellus suscipit. Praesent in accumsan mauris.
              Duis vel dignissim neque. Proin iaculis luctus commodo. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Praesent volutpat semper scelerisque. Donec dolor nunc,
              fermentum a metus posuere, cursus blandit quam. Morbi ullamcorper
              libero sit amet nisi commodo auctor et id quam. Duis vel ligula
              imperdiet, viverra orci at, iaculis felis. Pellentesque ligula
              nunc, blandit a suscipit nec, auctor eget ligula. Vestibulum
              hendrerit, magna vestibulum porttitor fringilla, dui turpis varius
              nulla, eu semper augue tortor in metus. Integer dolor arcu, porta
              sit amet felis eget, ullamcorper interdum sem.
            </h3>
          </section>
          {/* YO WHY IS THIS DUPLICATING */}
          <section id="latestContainer">
            <img className="latestPoster" alt=""></img>
            <img className="latestPoster" alt=""></img>
            <img className="latestPoster" alt=""></img>
            <img className="latestPoster" alt=""></img>
            <img className="latestPoster" alt=""></img>
            <img className="latestPoster" alt=""></img>
          </section>
=======
      <div className="pageContainer">
        <div className="body">
        <div className="homeTitle"><span>ABOUT</span></div>

          <div className='contentContainer'>
            <div>
              <img></img>
            </div>
            <div id="homeBlurb">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetra turpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat semper scelerisque. </h3>
            </div>
          </div>

          <div className="homeTitle"><span>LATEST</span></div>

          <div id="latestContainer">         {/* ONCLICK FUNCTION NEEDED */}
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div> 
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
            <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};

export default Home;
