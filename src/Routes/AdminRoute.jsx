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
            <div className="h-96 w-full pt-20">
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
                <h1 className="h-28 mx-auto">Loading admin dashboard...</h1>
                </div>
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
