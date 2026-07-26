import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {

  const { user, loading } = useAuth();

  console.log("Current User:", user);


  if (loading) {
    return <div>Loading...</div>;
  }


  if (!user) {
    return <Navigate to="/login" />;
  }


  if (user.Role?.toLowerCase() !== "admin") {
    return <Navigate to="/" />;
  }


  return children;
}