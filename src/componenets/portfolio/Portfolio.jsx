import React from "react";
import "./Portfolio.css";

import IMG1 from "../../images/portfolio1.jpg";
import IMG2 from "../../images/portfolio2.jpg";
import IMG3 from "../../images/portfolio3.jpg";
import IMG4 from "../../images/portfolio4.jpg";
import IMG5 from "../../images/portfolio5.png";
import IMG6 from "../../images/portfolio6.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>

          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="/https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="/https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
