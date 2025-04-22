import React, { useEffect, useRef } from "react";
import "./contact.css";
import { ImLocation2, ImPhone } from "react-icons/im";
import { BiEnvelope } from "react-icons/bi";
import MyIcon from "../../assets/MyIcon";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const notify = () => {
    if (
      (name.current.value === "") &
      (email.current.value === "") &
      (message.current.value === "")
    ) {
      toast.error("Please enter your data.");
    } else if (name.current.value === "") {
      toast.error("Please enter name.");
    } else if (email.current.value === "") {
      toast.error("Please enter email.");
    } else if (message.current.value === "") {
      toast.error("Please enter message.");
    } else {
      return (
        name.current.value == null,
        console.log(name),
        toast.success("The message was sent successfully")
      );
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17jbx1a",
        "template_4f8ba0k",
        form.current,
        "e3sMDmDjE99oRVyUe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="text">
              <h3 className="title">CONTACT ME</h3>
              <h1>Have You Any Project? Please Drop a Message</h1>
              <p className="dis">
                Get in touch and let me know how i can help. Fill out the form{" "}
                <br /> and i’ll be in touch as soon as possible.
              </p>
              <div className="box">
                <span>
                  <span className="loc">
                    <ImLocation2 />
                  </span>{" "}
                  Address:
                </span>
                <p>Tanta City - Gharbia</p>
              </div>
              <div className="box">
                <span>
                  <span className="loc">
                    <ImPhone />
                  </span>{" "}
                  Phone:
                </span>
                <p>01093518092</p>
              </div>
              <div className="box">
                <span>
                  {" "}
                  <span className="loc">
                    <BiEnvelope />
                  </span>
                  Email:
                </span>
                <p>yosefkhadr3@gmail.com</p>
              </div>
              <MyIcon />
            </div>
          </div>
          <div
            className="col-md-12 col-lg-6"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Name:</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    required
                    ref={name}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email:</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="from_Email"
                    required
                    ref={email}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Number:</span>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    name="from_phone"
                    ref={phone}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Message:</span>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    ref={message}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="su"
                  value="Send"
                  onClick={notify}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
