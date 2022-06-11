import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import bire from "../logo/bir.jpg";
import mama from "../logo/meow2.jpg";
import MetaData from "../layout/Metadata";

function About() {
  return (
    <>
      <MetaData title="About Us" />

      <div className="body d-flex justify-content-center align-items-center">
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgbx">
                  <img className="bire" src={bire} alt="" />
                </div>
                <div className="contentbx">
                  <h3>
                    Bir B Uperkoti
                    <br />
                    <span>
                      Graphic Designer
                      <br />
                      Front End Developer
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <Link to="www.facebook.com/bir.uperkoti/" target="_blank">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/bir_uperkoti/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/BiraTechinfo">
                    <i className="fab fa-twitter-square"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgbx">
                  <img className="mama" src={mama} alt="" />
                </div>
                <div className="contentbx">
                  <h3>
                    Manish Rai
                    <br />
                    <span>
                      Web Designer
                      <br />
                      Full Stack Developer
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <Link to="https://www.facebook.com/manish.raee.92">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/raii.manish/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter-square"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
