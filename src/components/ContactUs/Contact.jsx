import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../ContactUs/contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g10jdue",
        "template_0q87xaf",
        form.current,
        "U9vwB0dY7RWNYkgMt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-div">
            <div className="name">
              <div className="namelabel">
                <label>Name</label>
              </div>
              <div className="nametext">
                <input type="text" classname="user_name" />
              </div>
            </div>
            <div className="email">
              <div className="emaillabel">
                <label>Email</label>
              </div>
              <div className="emailtext">
                <input type="email" classname="user_email" />
              </div>
            </div>
            <div className="message">
              <div className="messagelabel">
                <label>Message</label>
              </div>
              <div>
                <textarea className="messagetext" />
              </div>
            </div>
            <div>
              <input className="submitbtn" type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
