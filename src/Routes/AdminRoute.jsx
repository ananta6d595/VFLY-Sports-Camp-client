import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { RevolvingDot } from "react-loader-spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isAdmin, isAdminLoading ]= useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="w-full pt-20 h-96">
                <div className=" w-full pt-[10%]">
                    <RevolvingDot
                        height="100"
                        width="100"
                        radius="40"
                        color="#4fa94d"
                        secondaryColor="#4fa94a"
                        ariaLabel="revolving-dot-loading"
                        wrapperStyle={{ height: 300, width: 300 }}
                        wrapperClass=" mx-auto"
                        visible={true}
                    />
                <h1 className="mx-auto h-28">Loading admin dashboard...</h1>
                </div>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default AdminRoute;


