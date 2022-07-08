import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="general_home">
      <div className="home">
        <div className="aside">
          <div className="nav_dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="scroll_div">
            <p className="scroll_p">ScrollDown</p>
            <FontAwesomeIcon className="arrow" icon={faAnglesDown} />
          </div>
        </div>
        <div className="general_title">
          <div className="title">
            <h1>MATT SANDOVAL</h1>
            <p>Frontend Web Developer</p>
            <p>UI/UX Designer</p>
            <div className="decoration_one">
              <hr className="top" />
              <br />
              <hr className="down" />
            </div>
          </div>
          <div className="code">
            <p>
              Const name = Matt; <br></br>
              Console.log('Hello World my name is' + name);
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
