import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Home from "../../components/Home/Home";

import PrivateRoute from "./PrivateRoute";

function RouteComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RouteComponent;
