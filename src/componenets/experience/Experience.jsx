import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Javascript</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>PHP</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>BootStrap</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* Backend*/}

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Node JS</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>PHP</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Dotnet</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Something</h4>
              </div>
              <small className="text-light">Nothing</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
