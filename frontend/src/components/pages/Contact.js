import React from "react";
import MetaData from "../layout/Metadata";
import "./Contact.css";

function Contact() {
  return (
    <>
      <MetaData title="Contact Us" />

      <div className="main">
        <div className="contact">
          <form action="">
            <div className="heading">
              <h1>Contact Form</h1>
            </div>
            <p className="para">
              We cannot solve your problem if you do not contact us
            </p>
            <input name="Name" placeholder="Your Name" id="name" />

            <input name="email" placeholder="Email" id="Email" />

            <textarea
              name="Message"
              placeholder="Message"
              id="Feedback"
              cols="70"
              rows="10"
            ></textarea>

            <div className="btnss">
              <button className="btns" type="submit">
                Submit
              </button>
            </div>
          </form>

          <div className="info">
            <div className="addContact">
              <div>
                <i className="fas fa-home"> </i>Patan Dhoka, Lalitpur
              </div>
              <div>
                <i className="fas fa-phone-square-alt"> </i>9823695347
              </div>
              <div>
                <i className="far fa-envelope"> </i>biratechinfo@gmail.com
              </div>
            </div>
            <div className="Hicons">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter-square"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
