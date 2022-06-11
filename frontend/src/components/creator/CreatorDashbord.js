import React, { useEffect } from "react";
import "../admin/Dashbord.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { getAdminProduct } from "../../redux/actions/phoneAction";
import Sidebar from "../admin/Sidebar";

const CreatorDashbord = () => {
  const dispatch = useDispatch();

  const { phones } = useSelector((state) => state.phones);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  let createdPhones = [];
  if (phones) {
    for (let i = 0; i < phones.length; i++) {
      if (user._id === phones[i].creator) {
        createdPhones.push(phones[i]);
      }
    }
  }
  console.log(createdPhones.length);

  return (
    <div className="dashboard">
      <MetaData title={`Dashboard - ${user.name}`} />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="/creator/phones">
              <p>Phones</p>
              <p>{createdPhones.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashbord;
