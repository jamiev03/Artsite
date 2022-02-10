import React from "react";
import "./about.css";
// import {data} from '../../data/data';
import aboutImg from '../../assets/aboutImg.png';

const About = () => {
  return (
    <div className="container">
      <div className="about__container">
          <div className="text__container">
              <h2 className="text__header">About me</h2>
              <p className="text__body">
              I’m Jamie a creative at heart and recent NFT artist. In my spare time playing around with colors, shapes, images and code is what I like to do. Taking inpiration from the world and filtering it down into digital form. I use many different tools and mediums to compose my works. From MS Paint to Photography, its all fair game. Most of my works do contain a “generative” aspect to them though. Appreciate the visit, feel free to contact for more information!
              </p>
          </div>
          <div className="about__image">
              <img src={aboutImg} alt="swirly blob thing" />
          </div>
      </div>
    </div>
  );
};

export default About;
