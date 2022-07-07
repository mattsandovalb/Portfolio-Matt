import React from "react";
import "./About.css";
import img2 from "../../img/light.jpg";

function About() {
  return (
    <div>
      <div className="general_about">
        <div className="about_img">
          <img src={img2} />
        </div>
        <div className="about_title">
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            amet cupiditate at dolor repellat mollitia! Facere mollitia ipsam
            modi minima illo eos in est quo veritatis incidunt! Necessitatibus,
            quod architecto.
          </p>
          <div className="decoration_one">
            <hr className="top" />
            <br />
            <hr className="down" />
          </div>
          <div className="div_button">
            <button className="about_button">
              <a href="#">KNOW ME MORE</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
