import { useEffect } from "react";
import Client from "../services/api";

const About = () => {
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
            <h2 id="teamTitle">MEET THE PixiDreams TEAM!</h2>
=======
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">MEET THE PIXIDREAMS TEAM!</span>
>>>>>>> Stashed changes

          <section className="contentContainer">

            <div className="memberCard">
              <h2 className="memberName">TONI</h2>
              <img id="memberImg" alt="toni-img" src="https://disneynews.us/wp-content/uploads/2019/11/Heihei-the-Rooster-moana-300x297.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="memberName">JASON</h2>
              <img id="memberImg" alt="jason-img" src="https://disneynews.us/wp-content/uploads/2019/11/Heihei-the-Rooster-moana-300x297.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="memberName">BEN</h2>
              <img id="memberImg" alt="ben-img" src="https://disneynews.us/wp-content/uploads/2019/11/Heihei-the-Rooster-moana-300x297.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>
            </div>

            <div className="memberCard">
              <h2 className="memberName">STEPH</h2>
              <img id="memberImg" alt="steph-img" src="https://disneynews.us/wp-content/uploads/2019/11/Heihei-the-Rooster-moana-300x297.jpg"></img>
              <h3 className="memberBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, dui nec elementum auctor, elit sem sodales tortor, at bibendum ante nunc a quam. Pellentesque pharetraturpis ac nibh molestie, id semper tellus suscipit. Praesent in accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus commodo. </h3>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
