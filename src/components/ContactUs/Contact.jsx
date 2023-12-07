import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../ContactUs/contact.css";

function Contact() {
  const form = useRef();
  const [show,setShow] = useState(false);

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
          setShow(!show);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <div className={show ? "messagesent" : "hiddenmessage"}>Message Sent</div>
      <div className="contact-container">
        
        <div>
            <img className="mail-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mail_fluent_Icon.svg/800px-Mail_fluent_Icon.svg.png" alt="mail_icon"/>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-div">
            <div className="name">
              <div className="namelabel">
                <label>Name</label>
              </div>
              <div className="nametext">
                <input type="text" classname="user_name" name="from_name"/>
              </div>
            </div>
            <div className="email">
              <div className="emaillabel">
                <label>Email</label>
              </div>
              <div className="emailtext">
                <input type="email" classname="user_email" name="reply_to"/>
              </div>
            </div>
            <div className="message">
              <div className="messagelabel">
                <label>Message</label>
              </div>
              <div>
                <textarea className="messagetext"  name="message"/>
              </div>
            </div>
            <div>
              <input className="submitbtn" type="submit" value="Send Message"/>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
