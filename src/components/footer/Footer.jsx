import React from "react";
import "./footer.css";

import img1 from "../../images/home (5).png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box-img">
          <a href="#home">
            <img src={img1} />
          </a>
        </div>
        <h3>
          © 2023 Proudly Powered by
          <a href="#home">
            <span>Youssef</span>
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
