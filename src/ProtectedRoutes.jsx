import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loading, isAuthenticated } = useAuth();


  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if(!isAuthenticated && !loading) {
    return <Navigate to="/login" replace/>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoutes;
