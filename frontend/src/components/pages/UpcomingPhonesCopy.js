import React from "react";
import SubHome from "./SubHome";
import "./Home.css";

function UpcomingPhones({ topic, phones }) {
  return (
    <div className="container category">
      <h3 className="badge rounded-pill bg-danger topic">{topic}</h3>

      <div className="row d-flex justify-content-center my-4">
        {phones &&
          phones.map((phone) =>
            phone.category === "upcoming" ? (
              <div
                key={phone._id}
                className="card col-md-4 col-lg-4 col-sm-2"
                style={{ width: "13rem", height: "fit-content" }}
              >
                <SubHome phone={phone} />
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}

export default UpcomingPhones;
