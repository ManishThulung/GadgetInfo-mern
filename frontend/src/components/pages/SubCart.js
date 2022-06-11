import React from "react";
import { Link } from "react-router-dom";

function SubCart({ phone }) {
  return (
    <>
      <Link to={`/phone/${phone._id}`}>
        <img
          className="card-img-top"
          src={phone.image.map((img) => img.url)}
          crossorigin="anonymous"
          alt="Card"
          style={{ paddingTop: "1.2rem", width: "200px", height: "200px" }}
        />

        <div className="card-body">
          <h5 className="card-title text-center title">{phone.name}</h5>
        </div>
      </Link>
    </>
  );
}

export default SubCart;
