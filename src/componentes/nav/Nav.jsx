import React from "react";
import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      <div className="general_nav">
        <div className="name">
          <h2>MATT SANDOVAL</h2>
        </div>
        <div className="social">
          <a href="https://github.com/mattsandovalb">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/matt.sandovalb/">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
        <div className="menu">
          <FontAwesomeIcon className="menu_burger" icon={faBars} />
        </div>
      </div>
    </div>
  );
}
export default Nav;
