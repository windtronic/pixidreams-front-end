import { useEffect } from "react";
import Client from "../services/api";

const About = () => {
  return (
    <div>
      <div id="pageContainer">
        {" "}
        {/* ORANGE */}
        <div id="body">
          {" "}
          {/* WHITE */}
          <section className="contentContainer">
            <h2 id="teamTitle">MEET THE PixiDreams TEAM!</h2>

            <div className="teamBlurb">
              <h2 className="memberName">Toni</h2>
              <img id="teamImg" alt=""></img>
              <h3 className="memberBlurb">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas interdum, dui nec elementum auctor, elit sem sodales
                tortor, at bibendum ante nunc a quam. Pellentesque pharetra
                turpis ac nibh molestie, id semper tellus suscipit. Praesent in
                accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus
                commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent volutpat semper
                scelerisque. Donec dolor nunc, fermentum a metus posuere, cursus
                blandit quam. Morbi ullamcorper libero sit amet nisi commodo
                auctor et id quam. Duis vel ligula imperdiet, viverra orci at,
                iaculis felis. Pellentesque ligula nunc, blandit a suscipit nec,
                auctor eget ligula. Vestibulum hendrerit, magna vestibulum
                porttitor fringilla, dui turpis varius nulla, eu semper augue
                tortor in metus. Integer dolor arcu, porta sit amet felis eget,
                ullamcorper interdum sem.
              </h3>
            </div>

            <div className="teamBlurb">
              <h2 className="memberName">Jason</h2>
              <img id="teamImg" alt=""></img>
              <h3 className="memberBlurb">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas interdum, dui nec elementum auctor, elit sem sodales
                tortor, at bibendum ante nunc a quam. Pellentesque pharetra
                turpis ac nibh molestie, id semper tellus suscipit. Praesent in
                accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus
                commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent volutpat semper
                scelerisque. Donec dolor nunc, fermentum a metus posuere, cursus
                blandit quam. Morbi ullamcorper libero sit amet nisi commodo
                auctor et id quam. Duis vel ligula imperdiet, viverra orci at,
                iaculis felis. Pellentesque ligula nunc, blandit a suscipit nec,
                auctor eget ligula. Vestibulum hendrerit, magna vestibulum
                porttitor fringilla, dui turpis varius nulla, eu semper augue
                tortor in metus. Integer dolor arcu, porta sit amet felis eget,
                ullamcorper interdum sem.
              </h3>
            </div>

            <div className="teamBlurb">
              <h2 className="memberName">Ben</h2>
              <img id="teamImg" alt=""></img>
              <h3 className="memberBlurb">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas interdum, dui nec elementum auctor, elit sem sodales
                tortor, at bibendum ante nunc a quam. Pellentesque pharetra
                turpis ac nibh molestie, id semper tellus suscipit. Praesent in
                accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus
                commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent volutpat semper
                scelerisque. Donec dolor nunc, fermentum a metus posuere, cursus
                blandit quam. Morbi ullamcorper libero sit amet nisi commodo
                auctor et id quam. Duis vel ligula imperdiet, viverra orci at,
                iaculis felis. Pellentesque ligula nunc, blandit a suscipit nec,
                auctor eget ligula. Vestibulum hendrerit, magna vestibulum
                porttitor fringilla, dui turpis varius nulla, eu semper augue
                tortor in metus. Integer dolor arcu, porta sit amet felis eget,
                ullamcorper interdum sem.
              </h3>
            </div>

            <div className="teamBlurb">
              <h2 className="memberName">Steph</h2>
              <img id="teamImg" alt=""></img>
              <h3 className="memberBlurb">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas interdum, dui nec elementum auctor, elit sem sodales
                tortor, at bibendum ante nunc a quam. Pellentesque pharetra
                turpis ac nibh molestie, id semper tellus suscipit. Praesent in
                accumsan mauris. Duis vel dignissim neque. Proin iaculis luctus
                commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent volutpat semper
                scelerisque. Donec dolor nunc, fermentum a metus posuere, cursus
                blandit quam. Morbi ullamcorper libero sit amet nisi commodo
                auctor et id quam. Duis vel ligula imperdiet, viverra orci at,
                iaculis felis. Pellentesque ligula nunc, blandit a suscipit nec,
                auctor eget ligula. Vestibulum hendrerit, magna vestibulum
                porttitor fringilla, dui turpis varius nulla, eu semper augue
                tortor in metus. Integer dolor arcu, porta sit amet felis eget,
                ullamcorper interdum sem.
              </h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
