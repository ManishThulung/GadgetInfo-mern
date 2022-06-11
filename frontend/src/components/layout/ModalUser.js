import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, deleteUser } from "../../redux/actions/userAction";
import { DELETE_USER_RESET } from "../../redux/constants/userConstants";
import { useAlert } from "react-alert";
import "./Modal.css";

function ModalUser({ deleteState, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.updateDeleteUser);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(message);
      navigate("/admin/dashboard");
      dispatch({ type: DELETE_USER_RESET });
    }
  }, [dispatch, alert, deleteError, isDeleted, navigate, message]);

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
            <h2>Are You Sure?</h2>
          </div>
          <div className="bodyy">
            <p>
              Do you really want to delete this record? This process cannot be
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
              onClick={() => deleteUserHandler(id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalUser;
