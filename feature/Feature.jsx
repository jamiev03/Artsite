import React from "react";
import "./feature.css";
import arrowDown from '../../assets/arrowDown.png'

const Feature = () => {
  return (
    <div className="container">
        <div className="feature__container">
            <div className="feature__container_text">
                <h3 className="feature__text">Every peice is a chance to try something new. </h3>
                <h3 className="feature__text">Do something for the first time.</h3>
                <h3 className="feature__text">Create something different.</h3>
            </div>
            <div className="feature__container_arrow">
                <img src={arrowDown} alt="arrow down" />
            </div>
        </div>
    </div>
  );
};

export default Feature;
