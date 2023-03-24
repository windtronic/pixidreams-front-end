import { useEffect } from "react";
import Client from "../services/api";
import LoginModal from "./LoginModal";

const About = () => {
  return (
      <div className="pageContainer">
        <div className="body">
          <div className="pageTitle">
            <span>MEET THE PIXIDREAMS TEAM!</span>
          </div>
          <section id="teamPage">
          <div className='contentContainer' style={{ justifyContent: 'center'}}>

            <div className="memberCard">
              <div className="sectionTitle">
                <span>TONI</span>
              </div><br></br>
                <img id="memberImg" alt="toni-img" src="https://i.imgur.com/dOCPrjt.jpg"></img>
                <h4 className="memberBlurb">Meet Toni, our resident animated movie enthusiast, passionate cook, green-thumbed gardener, and proud chicken parent! Based in Denver, Toni is a true lover of all things anime and can often be found binge-watching her favorite shows in her spare time. But when she's not indulging in her animated escapades, Toni is busy tending to her garden or whipping up delicious meals in the kitchen. And if you're lucky, you might just get a taste of her famous homemade chicken dish, made with love from her very own babu chickens! With her diverse interests and talents, Toni brings a unique perspective and a wealth of knowledge to our team.</h4>
            </div>

            <div className="memberCard">
              <div className="sectionTitle">
                <span>JASON</span>
              </div><br></br>
              <img id="memberImg" alt="jason-img" src="https://i.imgur.com/zI56yYp.jpg"></img>
              <h4 className="memberBlurb">Jason is an avid fan of animated movies and has been ever since he was a child. He's fascinated by the artistry and creativity that goes into producing these films, and enjoys exploring the different animation techniques used by different studios. Jason loves how animated movies can tell powerful stories that resonate with people of all ages and backgrounds, and how they can transport us to magical worlds beyond our own. As an animated movie enthusiast, he enjoys sharing his knowledge and passion with others, whether it's discussing the latest releases or introducing someone to a classic film they may have missed. </h4>
            </div>

            <div className="memberCard">
              <div className="sectionTitle">
                <span>BEN</span>
              </div><br></br>
              <img id="memberImg" alt="ben-img" src="https://i.imgur.com/2bR8HmC.jpg"></img>
              <h4 className="memberBlurb">Introducing Ben, our resident music aficionado, anime enthusiast, and beachcomber extraordinaire! With a keen ear for all things musical, Ben is constantly on the hunt for the latest and greatest tunes to add to his ever-expanding playlist. When he's not lost in his headphones, Ben can be found indulging in his love of anime or taking long, meditative walks on the beach, where he finds solace in the soothing sounds of the waves. With a passion for exploring new sounds and experiences, Ben brings a fresh perspective and an open mind to our team.</h4>
            </div>

            <div className="memberCard">
            <div className="sectionTitle"><span>STEPH</span></div><br></br>
              <img id="memberImg" alt="steph-img" src="https://i.imgur.com/IXUmptF.jpg"></img>
              <h4 className="memberBlurb">Steph is a multi-disciplinary artist who loves cooking, animals & tending to her plants!  With a love for Studio Ghibli and a fondness for all things nostalgic, Steph brings a fresh voice to PixiDreams.  Her thoughtful and insightful writing on animation, combined with her creative eye, make her an invaluable member of our team.</h4>

            </div>
          </div>


          </section>
        </div>
      </div>
  );
};

export default About;
