import React from "react";
import "./works.css";
import Flow031 from "../../assets/Flow031.png";
import Bloom001 from "../../assets/Bloom001.png";
import Flame002 from "../../assets/Flame002.png";
import Genesis010 from "../../assets/Genesis010.png";


const Works = () => {
  return (
    <div className="container">
      <div className="works__container">
        <div className="text__container">
          <h2 className="text__header">Works</h2>
          <p className="text__body">
            Since I started dabbling in NFTs I began to name work in order to
            keep track and to help identify certain pieces. So far I have come
            out with 2 sets, each with their own distinct styles and using the
            same generative tools. I continually try to improve the look and
            feel of each new piece by playing around with colors, shapes and
            parameters. These are InMotion and Flow.
          </p>
          <div className="works__inmotion">
            <h5>InMotion</h5>
            
            <p>
              A collection of generative art using "Perlin-noise" and ThreeJS.
              This gradient noise is used to create smooth organic textures with
              a touch of randomness. I started to play around with colors and
              textures and became fascinated by the idea that code could be used
              to create such rich experiences.
            </p>
            <div className="works__inmotion_images">
              <img src={Genesis010} alt="genesis blob" />
              <img src={Flame002} alt="Flame blob" />
              <img src={Bloom001} alt="Bloom blob" />
            </div>
          </div>
          <div className="works__flow">
            <h5>Flow</h5>
            <p>
              The "Flow" series is developed using Perlin-noise. I allow the
              algorithm to run its course through an image and by adjusting
              different levels of parameters I make several iterations. Finally
              choosing one. This creates both chaotic and tranquil motion
              through lines, color and intensity. Each piece unique, offering a
              different perspective for everyone.
            </p>
            <div className="works__flow_images"></div>
          </div>
        </div>
        <div className="works__image">
          <img src={Flow031} alt="flow art piece" />
          <div className="works__image2">
          <img src={Flow031} alt="flow art piece" />
          <img src={Flow031} alt="flow art piece" />
          <img src={Flow031} alt="flow art piece" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
