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
import { getAdminProduct } from "../../redux/actions/phoneAction";
import { clearErrors } from "../../redux/actions/userAction";
import Modal from "../layout/Modal";

const ProductList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [deleteState, setDeleteState] = useState(false);
  const [phoneId, setPhoneId] = useState(null);

  const { error, phones } = useSelector((state) => state.phones);

  const deleteHandler = (id) => {
    setDeleteState(true);
    setPhoneId(id);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      headerClassName: "columnHeaders",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "company",
      headerName: "Company",
      // type: "number",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "price",
      headerName: "Price",
      headerClassName: "columnHeaders",
      type: "number",
      minWidth: 80,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.35,
      headerName: "Actions",
      headerClassName: "columnHeaders",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/phone/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() => deleteHandler(params.getValue(params.id, "id"))}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  phones &&
    phones.forEach((item) => {
      rows.push({
        id: item._id,
        company: item.company,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PHONES - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PHONES</h1>

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
      {deleteState && <Modal deleteState={setDeleteState} id={phoneId} />}
    </Fragment>
  );
};

export default ProductList;
