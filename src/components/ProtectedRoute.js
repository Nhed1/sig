import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, path, children, isDashboard }) {
  if (isDashboard) {
    if (!user) {
      return <Navigate to={path} replace />;
    }
    return children;
  } else {
    if (user) {
      return <Navigate to={path} replace />;
    }
    return children;
  }
}
