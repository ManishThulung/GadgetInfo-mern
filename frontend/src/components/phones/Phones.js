import React from "react";
import { Link } from "react-router-dom";

import "./Phones.css";

import xiaomi from "../logo/xiaomi12ic-01.png";

function Phones() {
  return (
    <div
      style={{ width: "100vh", margin: "auto" }}
      className="accordion my-5"
      id="accordionPanelsStayOpenExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Xiaomi
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body">
            <div className="row">
              {/* card */}

              <div className="card col-md-3 col-lg-3 mx-4">
                <Link to="Xiaomi12.html" target="_self">
                  <img src={xiaomi} alt="..." />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">Xiaomi 12</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Apple
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div className="accordion-body">
            <strong>Apple phones</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;
