import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  console.log("ProtectedRoute Loaded");
  const isAuth = localStorage.getItem("adminAuth") === "true";

  if (!isAuth) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
