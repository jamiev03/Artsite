import React from "react";
import "./footer.css";
import Github from '../../assets/Github.png';
import Twitter from '../../assets/Twitter.png';


const Footer = () => {
  return (
    <div className="footer__container">
      <div className="container">
        <div className="about__container">
          <div className="text__container">
            <h2 className="footer__text__header">
              WOULD <i>LOVE</i>
            </h2>
            <h2 className="text__header">TO CONNECT</h2>
            <p className="text__body">
              Feel free to reach out if you want to collaborate, or simply have
              a chat!
            </p>
            <h5 className="email__link">jamie@laosawaits.com</h5>
          </div>
          <div className="footer__links">
            <p className="text__body">
                <h5>Follow me</h5>
                <img src={Github} alt="swirly blob thing" />
                <img src={Twitter} alt="swirly blob thing" />
            </p>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROCESS</li>
                <li>CONNECT</li>
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <p>copyright - designed and coded by: Jamie V. 2022</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
