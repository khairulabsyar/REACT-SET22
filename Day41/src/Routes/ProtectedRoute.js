import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

function ProtectedRoute({
  children,
  isAllowed = true,
  redirectPath = "/home",
}) {
  const { token } = UseAuth();

  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  if (!isAllowed) {
    alert("No Access");
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectedRoute;
