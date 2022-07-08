import React from "react";
import "./Work.css";
import img1 from "../../img/ink.jpg";

function Work() {
  return (
    <div>
      <div className="general_work">
        <div className="work_title">
          <h2>
            IN -K YOUR <br /> SKIN
          </h2>
          <p>
          Take a look at my latest work, a modern and groundbreaking website for the trendy tattoo studio. Do not miss it.
          </p>
          <div className="decoration_one">
            <hr className="top" />
            <br />
            <hr className="down" />
          </div>
          <div className="button">
            <button>
              <a href="">GO TO WEBSITE</a>
            </button>
          </div>
        </div>

        <div className="work_img">
          <img src={img1} alt="" />
        </div>
        <div className="color"></div>
      </div>
    </div>
  );
}
export default Work;