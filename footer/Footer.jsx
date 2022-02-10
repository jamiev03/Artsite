import React from "react";
import "./footer.css";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            debitis distinctio veritatis. Corrupti reprehenderit fugit vero
            veritatis velit corporis doloremque!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
