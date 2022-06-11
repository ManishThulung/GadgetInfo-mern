import React from "react";
import SubHome from "./SubHome";
import "./Home.css";
import SeeMore from "./SeeMore";

function TrendingPhones({ topic, phones }) {
  console.log([phones]);
  let page = [];

  phones &&
    phones.map((phone) => phone.category === "trending" && page.push(phone));
  return (
    <div className="container category">
      <h3 className="badge rounded-pill bg-danger topic">{topic}</h3>

      <div className="row d-flex justify-content-center my-4">
        {/* {phones &&
          phones.map(
            (phone) => phone.category === "trending" && page.push(phone) */}
        {/* // page.push(phone) &&
            // console.log(page.length) &&
            // page.length >= num && (
            // page.map((ph) => (
            //     page.length <= num && (
            // <div
            //   key={ph._id}
            //   className="card col-md-4 col-lg-4 col-sm-2"
            //   style={{ width: "13rem", height: "fit-content" }}
            // >

            // <SubHome phone={ph} />

            // </div>
            // ))
            // )
            // )
            // ) : (
            //   <SeeMore />
            // ) */}
        {/* // )} */}
        {/* {console.log(page)}
        {console.log(page.length)} */}
        {page.map(
          (ph, index) =>
            index <= 3 && (
              <div
                key={ph._id}
                className="card col-md-4 col-lg-4 col-sm-2"
                style={{ width: "13rem", height: "fit-content" }}
              >
                <SubHome phone={ph} />
              </div>
            )
        )}
        <div className="seeMore">
          <SeeMore category="trending" />
        </div>
      </div>
    </div>
  );
}

export default TrendingPhones;
