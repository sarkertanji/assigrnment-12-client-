import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Spinner
        style={{ margin: "100px  600px" }}
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
