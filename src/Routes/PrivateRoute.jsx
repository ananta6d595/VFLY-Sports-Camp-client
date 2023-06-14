import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { RevolvingDot } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
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

            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
