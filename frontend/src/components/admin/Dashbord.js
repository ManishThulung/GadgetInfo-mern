import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Dashbord.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { getAdminProduct } from "../../redux/actions/phoneAction";
import { getAllUsers } from "../../redux/actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { phones } = useSelector((state) => state.phones);

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Pannel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="/admin/phones">
              <p className="adminAccess">Phones</p>
              <p className="adminAccess">{phones && phones.length}</p>
            </Link>
            <Link to="/admin/users">
              <p className="adminAccess">Users</p>
              <p className="adminAccess">{users && users.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
