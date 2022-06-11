import React, { useEffect } from "react";
import "../pages/Home.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import MetaData from "../layout/Metadata";
import { getAllPhones } from "../../redux/actions/phoneAction";
import SubHome from "../pages/SubHome";

function AllApplePhones() {
  const dispatch = useDispatch();
  const { phones, loading } = useSelector((state) => state.phones);
  if (loading) {
    <Loader />;
  }

  useEffect(() => {
    dispatch(getAllPhones());
  }, [dispatch]);

  return (
    <div className="container category">
      <MetaData title="Apple Phones" />
      <h3 className="badge rounded-pill bg-danger topic">Apple Phones</h3>

      <div className="row d-flex justify-content-center my-4">
        {phones &&
          phones.map(
            (phone) =>
              phone.company === "apple" && (
                <div
                  key={phone._id}
                  className="card col-md-4 col-lg-4 col-sm-2"
                  style={{ width: "13rem", height: "17rem" }}
                >
                  <SubHome phone={phone} />
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default AllApplePhones;
