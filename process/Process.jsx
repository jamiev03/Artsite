import React from "react";
import "./process.css";
import arrowDown from "../../assets/arrowDown.png";

const Process = () => {
  return (
    <div className="container">
      <div className="process__container">
        <div className="process__left">
          <div className="process__left_text">
            <h5>01. Brainstorm</h5>
            <p>
              Use different social platforms for inspiration. Twitter, Instagram
              and Behance are my go tos.
            </p>
          </div>
          <div className="process__left_text">
            <h5>02. What can I do?</h5>
            <p>
              With the tools and knowledge I have now can I duplicate what is in
              my head?
            </p>
          </div>
          <div className="process__left_text">
            <h5>03. Tinker</h5>
            <p>
              Play around with the tools at hand. This is usually online
              Photopea, Figma and VS Code for doing generative parts.
            </p>
          </div>
          <div className="process__left_text">
            <h5>04. CREATE.</h5>
            <p>
              Visuals are in line with that imagined. Now process and iterate
              multiple versions and pick favorites.
            </p>
          </div>
        </div>
        <div className="text__container">
          <h2 className="text__header">
            <img className="process__img" src={arrowDown} alt="arrow left" />
            Process
          </h2>
          <p className="text__body">
            The process is pretty simple in my mind. I look at the world and
            certain things inspire me. For example a walk in the forest gives me
            colors, structure and motion, all parts of my art style. A more
            structured list below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
