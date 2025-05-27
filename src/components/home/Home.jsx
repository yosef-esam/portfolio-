import React, { useEffect } from "react";
import "./Home.css";
import home from "../../images/home (5).png";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BiDownload } from "react-icons/bi";
import MyIcon from "../../assets/MyIcon";

const Home = () => {
  const [text] = useTypewriter({
    words: ["MERN Developer", "React and Next Developer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 200,
  });

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row">
          <div
            className="col-md-7 text"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h3>HELLO I'M</h3>
            <h1>yousef esam</h1>
            <h3>
              I'M A <span>{text}</span>
              <span>
                <Cursor />
              </span>
            </h3>
            <p className="dis">
              MERN Stack Developer with 3+ years of experience building scalable
              web applications. Specialized in React and Next.js for creating
              responsive, user-focused interfaces. Proven track record in
              developing high-performance e-commerce and real estate platforms
              with a focus on optimization, SEO, and cross-browser
              compatibility.
            </p>
            <MyIcon />
            <button>
              <a
                href="https://drive.google.com/file/d/1zGJCUb-clJsv5DKEn4vUqBaeVyteCB3i/view?usp=sharing"
                target="blank"
              >
                Download CV{" "}
                <span>
                  <BiDownload />
                </span>
              </a>
            </button>
          </div>
          <div
            className="col-md-5 photo"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src={home} alt="home image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
