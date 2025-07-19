import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({children}) {
    const { isAuthenticate , loading} = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!isAuthenticate) {
        return <Navigate to="/" />; 
    }

    return children

}

export default ProtectedRoute;