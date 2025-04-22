import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import test2 from "../../images/test-22.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h1 data-aos-duration="1500" data-aos="fade-right">
          About <span>Me</span>
        </h1>
        <div className="imag" data-aos-duration="1500" data-aos="zoom-in">
          <div className="circle">
            <img src={test2} alt="my photo" />
          </div>
        </div>
        <h3 className="title" data-aos-duration="1500" data-aos="fade-right">
          MERN Stack Developer
        </h3>
        <p className="dis" data-aos="flip-up" data-aos-duration="1500">
          MERN Stack Developer with 3+ years of experience building scalable web
          applications. Specialized in React and Next.js for creating
          responsive, user-focused interfaces. Proven track record in developing
          high-performance e-commerce and real estate platforms with a focus on
          optimization, SEO, and cross-browser compatibility.
        </p>
      </div>
    </section>
  );
};

export default About;
