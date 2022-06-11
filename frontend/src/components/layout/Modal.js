import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, deletePhone } from "../../redux/actions/phoneAction";
import { DELETE_PHONE_RESET } from "../../redux/constants/constants";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import "./Modal.css";

function Modal({ deleteState, id, role }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteUpdate
  );

  const deletePhoneHandler = (id) => {
    dispatch(deletePhone(id));
  };

  useEffect(() => {
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Phone Deleted Successfully");
      role === "content_creator"
        ? navigate("/creator/profile")
        : navigate("/admin/dashboard");
      dispatch({ type: DELETE_PHONE_RESET });
    }
  }, [dispatch, alert, deleteError, isDeleted, navigate, role]);

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                deleteState(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are You Sure?</h1>
          </div>
          <div className="bodyy">
            <p>
              Do you really want to delete this records? This process cannot be
              undone.
            </p>
          </div>
          <div className="footer">
            <Button
              variant="contained"
              onClick={() => {
                deleteState(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deletePhoneHandler(id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
