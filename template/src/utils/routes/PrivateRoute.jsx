import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return localStorage.getItem("user") ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.shape({}),
};

PrivateRoute.defaultProps = {
  children: undefined,
};

export default PrivateRoute;
