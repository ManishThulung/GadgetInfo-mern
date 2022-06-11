import React, { useEffect } from "react";
import pic1 from "../logo/pic1.jpg";
import pic2 from "../logo/pic2.jpg";
import pic3 from "../logo/pic3.jpg";
import { useSelector, useDispatch } from "react-redux";
import "./Contact.css";
import { getAllPhones } from "../../redux/actions/phoneAction";
import TrendingPhones from "./TrendingPhones";
import GamingPhones from "./GamingPhones";
import UpcomingPhones from "./UpcomingPhones";
import MetaData from "../layout/Metadata";

function Home() {
  const dispatch = useDispatch();
  const { phones } = useSelector((state) => state.phones);

  useEffect(() => {
    dispatch(getAllPhones());
  }, [dispatch]);
  return (
    <>
      <MetaData title="GadgetInfo - Phones" />

      <div style={{ height: "90vh" }}>
        <div
          id="carouselExampleDark"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ zIndex: "-1" }}>
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={pic1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <Link to="/phones/trending"> */}
                <h5>Trending Phones</h5>
                <p>See the top Smartphones of this year below.</p>
                {/* </Link> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={pic2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <Link to="/phones/upcoming"> */}
                <h5>Upcoming Phones</h5>
                <p>See the top featured Upcoming Smartphones below.</p>
                {/* </Link> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <Link to="/phones/gaming"> */}
                <h5>Gaming Phones</h5>
                <p>See the top Gaming Smartphones below.</p>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section>
        <TrendingPhones topic="Trending Phones" phones={phones} />
        <GamingPhones topic="Gaming Phones" phones={phones} />
        <UpcomingPhones topic="Upcoming Phones" phones={phones} />
      </section>
    </>
  );
}

export default Home;
