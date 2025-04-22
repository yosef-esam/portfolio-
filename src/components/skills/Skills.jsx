import React, { useEffect, useState } from "react";
import "./skills.css";
import css from "../../images/css.png";
import tailwind from "../../images/tailwind.png";
import css2 from "../../images/css2.png";
import js from "../../images/js.png";
import gitHup from "../../images/gitHup-2.png";
import reactImag from "../../images/react.png";
import sass from "../../images/sass.png";
import mongoDb from "../../images/mongodb.svg";
import nodejs from "../../images/nodejs.svg";
import express from "../../images/express.svg";
import nextjs from "../../images/next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    // lazyLoad: true,
    cssEase: "ease-in-out",
  };
  const settings_2 = {
    rtl: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease-in-out",
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 text"
            data-aos-duration="1500"
            data-aos="fade-right"
          >
            <h3>MY SKILLS</h3>
            <h1>What My Programming Skills Included?</h1>
            <p>
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
          </div>
          <div className="image col-md-6">
            <div className="children">
              <div>
                <Slider {...settings_2} className="slider_container">
                  <dev className="itme">
                    {" "}
                    <img src={css} alt="" />
                  </dev>
                  <dev className="itme">
                    {" "}
                    <img src={tailwind} alt="" />
                  </dev>
                  <dev className="itme">
                    {" "}
                    <img src={css2} alt="" />
                  </dev>
                  <dev className="itme">
                    {" "}
                    <img src={sass} alt="" />
                  </dev>
                  <dev className="itme">
                    {" "}
                    <img src={gitHup} alt="" />
                  </dev>
                  <dev className="itme">
                    {" "}
                    <img src={js} alt="" />
                  </dev>
                </Slider>
              </div>
              <div className="mr"></div>
              {isLoaded && (
                <div>
                  <Slider {...settings} className="slider_container">
                    <dev className="itme">
                      {" "}
                      <img src={reactImag} alt="" />
                    </dev>
                    <dev className="itme">
                      {" "}
                      <img src={nextjs} alt="" />
                    </dev>
                    <dev className="itme">
                      {" "}
                      <img src={mongoDb} alt="" />
                    </dev>
                    <dev className="itme">
                      {" "}
                      <img src={nodejs} alt="" />
                    </dev>
                    <dev className="itme">
                      {" "}
                      <img src={express} alt="" />
                    </dev>
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
