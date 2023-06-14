import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isAdmin, isAdminLoading ]= useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="h-96 w-full pt-20">
                <h1 className="h-28 mx-auto">loading...</h1>
                {/* <img src="/src/assets/giphy.webp" className="h-28 mx-auto" /> */}
            </div>
        );
    }

    // console.log("user",user);
    // console.log("isAdmin in admin route",isAdmin);
    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default AdminRoute;
