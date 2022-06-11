import React from "react";
// import "./Sidebar.css";
import "./Sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

const Sidebar = () => {
  const { user, loading } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="sidebar">
          <Link
            to={user.role === "admin" ? "/admin/dashboard" : "/creator/profile"}
          >
            <p>
              <DashboardIcon /> Dashboard
            </p>
          </Link>
          <Link to="">
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ImportExportIcon />}
            >
              <TreeItem nodeId="1" label="Phones">
                <Link
                  to={
                    user.role === "admin" ? "/admin/phones" : "/creator/phones"
                  }
                >
                  <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                </Link>

                <Link
                  to={user.role === "admin" ? "/admin/phone" : "/creator/phone"}
                >
                  <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                </Link>
              </TreeItem>
            </TreeView>
          </Link>

          {user.role === "admin" && (
            <Link to="/admin/users">
              <p>
                <PeopleIcon /> Users
              </p>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
