import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./Productlist.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { clearErrors, getAllUsers } from "../../redux/actions/userAction";
// import ModalUser from "../layout/ModalUser";
import ModalUser from "../layout/ModalUser";

const UserList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [deleteState, setDeleteState] = useState(false);
  const [userId, setUserId] = useState(null);

  const { error, users } = useSelector((state) => state.allUsers);

  const deleteUserHandler = (id) => {
    setDeleteState(true);
    setUserId(id);
    console.log(userId);
    console.log("deleting");
    console.log(deleteState);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllUsers());
  }, [dispatch, error, alert]);

  const columns = [
    { field: "id", headerName: "USER ID", minWidth: 200, flex: 0.6 },

    {
      field: "email",
      headerName: "Email",
      headerClassName: "columnHeaders",
      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "name",
      headerName: "Name",
      headerClassName: "columnHeaders",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "role",
      headerName: "Role",
      headerClassName: "columnHeaders",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "actions",
      flex: 0.35,
      headerName: "Actions",
      headerClassName: "columnHeaders",
      minWidth: 140,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        email: item.email,
        name: item.name,
        role: item.role,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      {deleteState && <ModalUser deleteState={setDeleteState} id={userId} />}
    </Fragment>
  );
};

export default UserList;
