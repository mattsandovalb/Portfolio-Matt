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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quidem, nihil magnam consequatur ut deleniti veniam cupiditate
            tempora tenetur quos veritatis! Eligendi cum et fugiat voluptatum
            culpa reiciendis quod repudiandae!
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
