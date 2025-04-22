import React, { useEffect } from "react";
import "./work.css";

import iamg4 from "../../images/rusturent.jpg";
import iamg5 from "../../images/smart.jpg";

import iamg7 from "../../images/exclusive.png";
import iamg8 from "../../images/todo.png";
import iamg9 from "../../images/food-mine.png";
import iamg10 from "../../images/noteapp.png";
import iamg11 from "../../images/aroundWorld.png";

import { BiLinkAlt, BiLinkExternal } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="Portfolio">
      <div className="container">
        <h3 data-aos="fade-right">MY WORK</h3>
        <h1 data-aos="fade-right">See My Works Which Will Amaze You!</h1>

        <div className="my-work">
          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg7} alt="photo" />
            <div className="itme__text">
              <h2>exclusive</h2>
              <p>A website that helps you charge all electronic games</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_1"
                  data-tooltip-content="view code "
                >
                  <a href="/https://github.com/yosef-esam/e-commerce">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_1"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://e-commerce-yousef.vercel.app/"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_1" />
            <Tooltip id="Go_1" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg9} alt="photo" />
            <div className="itme__text">
              <h2>Food Mine Dashboard</h2>
              <p>
                A sleek dashboard built with the MERN stack to manage your food
                store, track orders, and handle deliveries with ease.
              </p>

              <div className="icon">
                <span
                  data-tooltip-id="rights_2"
                  data-tooltip-content="view code "
                >
                  <a href="https://github.com/yosef-esam/Food-App/tree/main">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_2"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://food-app-client-kappa.vercel.app/"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_2" />
            <Tooltip id="Go_2" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg8} alt="photo" />
            <div className="itme__text">
              <h2>To-Do App</h2>
              <p>
                A task management tool that helps users organize their daily
                activities, set priorities, and stay productive.
              </p>

              <div className="icon">
                <span
                  data-tooltip-id="rights_3"
                  data-tooltip-content="view code "
                >
                  <a href="/https://github.com/yosef-esam/Todo-List-main">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_3"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://todo-list-yousef.vercel.app/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_3" />
            <Tooltip id="Go_3" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg10} alt="photo" />
            <div className="itme__text">
              <h2>Note App Admin Dashboard</h2>
              <p>
                A control panel that helps the admin manage notes, monitor
                usage, and ensure smooth organization.
              </p>

              <div className="icon">
                <span
                  data-tooltip-id="rights_4"
                  data-tooltip-content="view code "
                >
                  <a href="https://github.com/yosef-esam/Note-App-main">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_4"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://note-app-yousef.vercel.app/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_4" />
            <Tooltip id="Go_4" />
          </div>
          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg4} alt="photo" />
            <div className="itme__text">
              <h2>Restaurant</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_9"
                  data-tooltip-content="view code "
                >
                  <a
                    href="https://github.com/yosef-esam/resturant"
                    target="blank"
                  >
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_9"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://restaurant-react-project.vercel.app/"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_9" />
            <Tooltip id="Go_9" />
          </div>
          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg5} alt="photo" />
            <div className="itme__text">
              <h2>Smart</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_8"
                  data-tooltip-content="view code "
                >
                  <a href="https://github.com/yosef-esam/smart" target="blank">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_8"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://smart-ten-eta.vercel.app/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_8" />
            <Tooltip id="Go_8" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg11} alt="photo" />
            <div className="itme__text">
              <h2>Around The world</h2>
              <p>
                A global control panel that allows the admin to explore, manage,
                and search information from all countries in one place.
              </p>

              <div className="icon">
                <span
                  data-tooltip-id="rights_5"
                  data-tooltip-content="view code "
                >
                  <a href="https://github.com/yosef-esam/around-world">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_5"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://around-world-drab.vercel.app/"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_5" />
            <Tooltip id="Go_5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
