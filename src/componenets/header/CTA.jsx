import React from "react";
import CV from "../../images/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact ME
      </a>
    </div>
  );
}

export default CTA;
