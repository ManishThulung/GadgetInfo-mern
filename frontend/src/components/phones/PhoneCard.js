import React from "react";
import { Link } from "react-router-dom";

import "./AllPhones.css";

function PhoneCard({ phone, width }) {
  return (
    <>
      <Link to={`/phone/${phone._id}`}>
        {width === 1 ? (
          <img
            className="card-img-top"
            // src={phone.pic}
            src={phone.image.map((img) => img.url)}
            crossorigin="anonymous"
            alt="Card"
            style={{ paddingTop: "1.2rem", width: "165px", height: "180px" }}
          />
        ) : (
          <img
            className="card-img-top"
            // src={phone.pic}
            src={phone.image.map((img) => img.url)}
            alt="Card"
            style={{ paddingTop: "1.2rem", width: "200px", height: "200px" }}
            crossorigin="anonymous"
          />
        )}

        <div className="card-body">
          <h5 className="card-title text-center title">{phone.name}</h5>
        </div>
      </Link>
    </>
  );
}

export default PhoneCard;
