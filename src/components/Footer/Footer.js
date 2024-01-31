import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";

export default function Footer() {
  return (
    <div id="footer-component">
      <div className="container">
        <div className="logo">
          <h1>movie.com</h1>
          <h3>2024</h3>
        </div>
        <div className="links">
          <NavLink
            to="https://www.linkedin.com/in/arundhati-bandopadhyaya-519162191/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" />
          </NavLink>
          <NavLink
            to="mailto:arundhatib.work@gmail.com?subject=I checked out Coursero"
            target="_blank"
          >
            <img src={mail} alt="Mail" />
          </NavLink>
          <NavLink to="https://github.com/arundhati-work" target="_blank">
            <img src={github} alt="Github" />
          </NavLink>
        </div>
      </div>

      <div className="credit">
        <p>Created with &#10084; by Arundhati.</p>
      </div>
    </div>
  );
}
