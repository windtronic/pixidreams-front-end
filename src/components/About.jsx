import { useEffect } from "react";
import Client from "../services/api";
import LoginModal from "./LoginModal";

const About = () => {
  return (
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">MEET THE PIXIDREAMS TEAM!</span>

          <section className="contentContainer">

            <div className="memberCard">
              <h2 className="sectionTitle"><span>TONI</span></h2>
              <img id="memberImg" alt="toni-img" src="https://i.imgur.com/dOCPrjt.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="sectionTitle"><span>JASON</span></h2>
              <img id="memberImg" alt="jason-img" src="https://i.imgur.com/zI56yYp.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="sectionTitle"><span>BEN</span></h2>
              <img id="memberImg" alt="ben-img" src="https://i.imgur.com/2bR8HmC.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="sectionTitle"><span>STEPH</span></h2>
              <img id="memberImg" alt="steph-img" src="https://i.imgur.com/IXUmptF.jpg"></img>
              <h3 className="memberBlurb">Steph is a multi-disciplinary artist who loves cooking, animals & tending to her plants!  With a love for Studio Ghibli and a fondness for all things nostalgic, Steph brings a fresh voice to PixiDreams.  Her thoughtful and insightful writing on animation, combined with her creative eye, make her an invaluable member of our team.</h3>

            </div>
          </section>
        </div>
      </div>
  );
};

export default About;
