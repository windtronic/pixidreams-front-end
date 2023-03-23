import LoginModal from "./LoginModal";

const Home = () => {
  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          
        <div className='titleContainer'>
          <div className="homeTitle"><span>ABOUT</span></div>
        </div>

          <div className='welcomeBlurbContainer'>
            <div id="homeBlurb" style={{textAlign: 'right', marginRight: '1vw'}}><br></br>
              <h3>Welcome to PixiDreams, the go-to movie blog for all things animated! 
                  <br></br><br></br>
                  From timeless classics to the latest box office hits, PixiDreams offers thoughtful and insightful reviews that delve into the storytelling, animation techniques, and themes that make each movie unique. 
                  <br></br><br></br>
                  We believe that animation is more than just entertainment - it's an art form that has the power to inspire and captivate audiences of all ages. That's why we're dedicated to sharing our passion for animated movies with our readers, and keeping them up-to-date on the latest news and trends in the world of animation.</h3><br></br>
            </div>
            <div>
              <img src='https://i.imgur.com/5gvUh78.jpg' style={{width: '50vw'}}></img>
            </div>
          </div>

          <div className='titleContainer'>
            <div className="homeTitle"><span>LATEST</span></div>
          </div>

          <div id="latestContainer" style={{marginBottom: '50px'}}>         {/* ONCLICK FUNCTION NEEDED */}
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div> 
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
              <div id='posterCard'><img className="latestPoster" alt="poster"></img></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
