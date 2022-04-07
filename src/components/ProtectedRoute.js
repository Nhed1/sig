import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, path, children }) {
  if (!user) {
    return <Navigate to={path} replace />;
  }
  return children;
}
