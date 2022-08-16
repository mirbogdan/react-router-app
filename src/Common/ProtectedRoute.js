import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, authenticated, ...rest }) => {
  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
