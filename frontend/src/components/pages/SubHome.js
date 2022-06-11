import React from "react";
import { Link } from "react-router-dom";

function SubHome({ phone }) {
  phone.image.map((img) => console.log(img.url));
  return (
    <>
      <Link to={`/phone/${phone._id}`}>
        <img
          className="card-img-top"
          src={phone.image.map((img) => img.url)}
          alt="Card"
          crossorigin="anonymous"
          style={{ paddingTop: "1.2rem", width: "200px", height: "200px" }}
        />

        <div className="card-body">
          <h5 className="card-title text-center title">{phone.name}</h5>
        </div>
      </Link>
    </>
  );
}

export default SubHome;
