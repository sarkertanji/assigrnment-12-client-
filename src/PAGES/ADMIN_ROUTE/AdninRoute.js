import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";

const AdninRoute = ({ children }) => {
  const location = useLocation();
  const { user, admin, isLoading } = useAuth();

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
  return user && admin ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
};

export default AdninRoute;
