import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  // const navigate = useNavigate();
  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Route render={() => <Navigate to="/login" />} />;
              // return <Redirect to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Route render={() => <Navigate to="/login" />} />;
              // return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
