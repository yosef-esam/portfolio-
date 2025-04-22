import React from "react";
import "./my-icon.css";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoLinkedin,
  BiDownload,
} from "react-icons/bi";

const MyIcon = () => {
  return (
    <div className="my-icon">
      <div className="icons">
        <span>
          <a href="https://web.facebook.com/youssif.esam.50" target="blank">
            <BiLogoFacebook />
          </a>
        </span>
        <span>
          <a href="https://x.com/yosefkhadr" target="blank">
            <BiLogoTwitter />
          </a>
        </span>
        <span>
          <a href="https://github.com/yosef-esam/" target="blank">
            <BiLogoGithub />
          </a>
        </span>
        <span>
          {" "}
          <a href="https://www.linkedin.com/in/yosef-esam/" target="blank">
            <BiLogoLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
};

export default MyIcon;
