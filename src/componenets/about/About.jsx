import React from "react";
import "./About.css";
import ME from "../../images/about-me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__myimage"></div>
          <img src={ME} alt="img"></img>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>0 years</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h5>Clients</h5>
              <small>0++ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>0+ Projects</small>
            </article>
          </div>
          <p>
            and dsfd dkcmkmdc kjddfjkkds jkdfnmsd djkndmc jkdk and dsfd dkcmkmdc
            kjddfjkkds jkdfnmsd djkndmc jkdk and dsfd dkcmkmdc kjddfjkkds
            jkdfnmsd djkndmc jkdk
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
