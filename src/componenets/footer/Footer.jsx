import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Faria Kamal
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#">About</a>
        </li>
        <li>
          {" "}
          <a href="#">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#">Services</a>
        </li>
        <li>
          {" "}
          <a href="#">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#">Reference</a>
        </li>
        <li>
          {" "}
          <a href="/#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Faria Kamal's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
