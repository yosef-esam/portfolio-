import React, { useEffect } from "react";
import "./services.css";
import { BiCreditCardFront, BiCodeBlock, BiMobileAlt } from "react-icons/bi";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div
          className="row text aos-animate aos-init"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <h3 className="">MY SERVICES</h3>
          <h1>What I do For My Clients</h1>
        </div>
        <div className="row cards">
          <div
            className="card1 aos-animate aos-init"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="icon">
              <BiCreditCardFront />
            </span>
            <h2 className="title">Full Stack Development</h2>
            <p className="dis">
              I will design and develop your personal or company website with
              high professionalism. With extensive experience in full stack
              development, I deliver seamless frontend and backend solutions
              tailored to your needs.
            </p>
          </div>
          <div
            className="card1 aos-animate aos-init"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="icon">
              <BiMobileAlt />
            </span>
            <h2 className="title">Responsive Web Design</h2>
            <p className="dis">
              Ensuring that interfaces adapt smoothly to different devices and
              implementing them in the best ways
            </p>
          </div>
          <div
            className="card1 aos-animate aos-init"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="icon">
              <BiCodeBlock />
            </span>
            <h2 className="title">Performance Optimization</h2>
            <p className="dis">
              Boost interface speed and efficiency for optimal performance. And
              linking them in ideal ways to the backends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
