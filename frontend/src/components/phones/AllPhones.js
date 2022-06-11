import React, { useEffect } from "react";
import { getAllPhones } from "../../redux/actions/phoneAction";
import { useSelector, useDispatch } from "react-redux";
import "./AllPhones.css";
import "../pages/Home.css";

import Loader from "../loader/Loader";
import SubHome from "../pages/SubHome";
import SeeMore from "../pages/SeeMore";
import MetaData from "../layout/Metadata";

function AllPhones() {
  const dispatch = useDispatch();

  const { phones, isLoading } = useSelector((state) => state.phones);

  if (isLoading) {
    <Loader />;
  }

  let apple = [];
  let xiaomi = [];
  let samsung = [];
  let vivo = [];
  let oppo = [];
  let asus = [];

  phones &&
    phones.map((phone) => phone.company === "apple" && apple.push(phone));
  phones &&
    phones.map((phone) => phone.company === "xiaomi" && xiaomi.push(phone));
  phones &&
    phones.map((phone) => phone.company === "samsung" && samsung.push(phone));
  phones && phones.map((phone) => phone.company === "vivo" && vivo.push(phone));
  phones && phones.map((phone) => phone.company === "oppo" && oppo.push(phone));
  phones && phones.map((phone) => phone.company === "asus" && asus.push(phone));

  useEffect(() => {
    dispatch(getAllPhones());
  }, [dispatch]);

  return (
    <>
      <MetaData title="All Phones" />
      <div className="accordion my-5 mx-5" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="panelsStayOpen-headingTwo"
            style={{ borderBottom: "1px solid gray" }}
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={{ fontSize: "1.4vmax" }}
            >
              Apple
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div className="row d-flex justify-content-center my-4">
                {apple.map(
                  (ph, index) =>
                    index <= 3 && (
                      <div
                        key={ph._id}
                        className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                        style={{ width: "13rem", height: "17rem" }}
                      >
                        <SubHome phone={ph} />
                      </div>
                    )
                )}
                {apple.length > 4 && (
                  <div className="seeMore">
                    <SeeMore category="apple" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            style={{ borderBottom: "1px solid gray" }}
            className="accordion-header"
            id="panelsStayOpen-headingOne"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
              style={{ fontSize: "1.4vmax" }}
            >
              Xiaomi
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <div className="row d-flex justify-content-center my-4">
                {xiaomi.map(
                  (ph, index) =>
                    index <= 3 && (
                      <div
                        key={ph._id}
                        className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                        style={{ width: "13rem", height: "17rem" }}
                      >
                        <SubHome phone={ph} />
                      </div>
                    )
                )}
                {xiaomi.length > 4 && (
                  <div className="seeMore">
                    <SeeMore category="xiaomi" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            style={{ borderBottom: "1px solid gray" }}
            className="accordion-header"
            id="panelsStayOpen-headingThree"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              // aria-controls="panelsStayOpen-collapseTwo"
              style={{ fontSize: "1.4vmax" }}
            >
              Samsung
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <div className="row d-flex justify-content-center my-4">
                {samsung.map(
                  (ph, index) =>
                    index <= 3 && (
                      <div
                        key={ph._id}
                        className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                        style={{ width: "13rem", height: "17rem" }}
                      >
                        <SubHome phone={ph} />
                      </div>
                    )
                )}
                {samsung.length > 4 && (
                  <div className="seeMore">
                    <SeeMore category="samsung" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            style={{ borderBottom: "1px solid gray" }}
            className="accordion-header"
            id="panelsStayOpen-headingFour"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              // aria-controls="panelsStayOpen-collapseTwo"
              style={{ fontSize: "1.4vmax" }}
            >
              Vivo
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <div className="row d-flex justify-content-center my-4">
                {vivo.map(
                  (ph, index) =>
                    index <= 3 && (
                      <div
                        key={ph._id}
                        className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                        style={{ width: "13rem", height: "17rem" }}
                      >
                        <SubHome phone={ph} />
                      </div>
                    )
                )}
                {vivo.length > 4 && (
                  <div className="seeMore">
                    <SeeMore category="vivo" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            style={{ borderBottom: "1px solid gray" }}
            className="accordion-header"
            id="panelsStayOpen-headingFive"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              // aria-controls="panelsStayOpen-collapseTwo"
              style={{ fontSize: "1.4vmax" }}
            >
              Oppo
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <div className="row d-flex justify-content-center my-4">
                {oppo.map(
                  (ph, index) =>
                    index <= 3 && (
                      <div
                        key={ph._id}
                        className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                        style={{ width: "13rem", height: "17rem" }}
                      >
                        <SubHome phone={ph} />
                      </div>
                    )
                )}
                {oppo.length > 4 && (
                  <div className="seeMore">
                    <SeeMore category="oppo" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {asus.length >= 1 && (
          <div className="accordion-item">
            <h2
              style={{ borderBottom: "1px solid gray" }}
              className="accordion-header"
              id="panelsStayOpen-headingSix"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                // aria-controls="panelsStayOpen-collapseTwo"
                style={{ fontSize: "1.4vmax" }}
              >
                Asus
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              className="accordion-collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div className="accordion-body">
                <div className="row d-flex justify-content-center my-4">
                  {asus.map(
                    (ph, index) =>
                      index <= 3 && (
                        <div
                          key={ph._id}
                          className="card phoneCard mx-3 col-md-4 col-lg-4 col-sm-2"
                          style={{ width: "13rem", height: "17rem" }}
                        >
                          <SubHome phone={ph} />
                        </div>
                      )
                  )}
                  {asus.length > 4 && (
                    <div className="seeMore">
                      <SeeMore category="asus" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AllPhones;
