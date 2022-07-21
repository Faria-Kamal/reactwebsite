import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../images/me.png";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className=".container header__container">
        <h5>Hello I'm</h5>
        <h1>Faria Kamal</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
}

export default Header;
