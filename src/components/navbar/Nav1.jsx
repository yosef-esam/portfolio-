import React, { useRef, useState } from "react";
import "./nav.css";
import { FaBars } from "react-icons/fa6";

const Nav1 = () => {
  const [navbar, setNavbar] = useState(false);
  const [hidden, setHidden] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container1">
        <div className="logo">
          <h2>Yousef Esam</h2>
        </div>
        <div className="links">
          <p>
            <a href="#home"> Home</a>
          </p>
          <p>
            <a href="#services">Services</a>{" "}
          </p>
          <p>
            <a href=" #about"> About</a>
          </p>
          <p>
            <a href="#skills"> Skills</a>
          </p>
          <p>
            {" "}
            <a href="#portfolio">Portfolio</a>
          </p>
          <button>
            <a href="#contact"> Contact Me</a>
          </button>
        </div>
        <div className={hidden ? "links-media hidden" : "links-media"}>
          <p>
            <a href="#home"> Home</a>
          </p>
          <p>
            <a href="#services">Services</a>{" "}
          </p>
          <p>
            <a href=" #about"> About</a>
          </p>
          <p>
            <a href="#skills"> Skills</a>
          </p>
          <p>
            {" "}
            <a href="#portfolio">Portfolio</a>
          </p>
          <button>
            <a href="#contact"> Contact Me</a>
          </button>
        </div>
        <div className="menuBarr" onClick={() => setHidden(!hidden)}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Nav1;
