import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import img3 from "../../img/contact.jpg";

function Contact() {
  return (
    <div>
      <div className="general_contact">
        <div className="contact_title">
          <h2>CONTACT ME</h2>
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
          <h3>mattsandovalbalada@gmail.com</h3>
          <div className="contact_div">
            <a href="https://www.linkedin.com/feed/">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/matt.sandovalb/">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="contact_img">
          <img src={img3} />
        </div>
      </div>
    </div>
  );
}
export default Contact;
