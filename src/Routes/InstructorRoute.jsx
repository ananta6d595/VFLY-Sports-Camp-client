import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import { RevolvingDot } from "react-loader-spinner";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isInstructor, isInstructorLoading ] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return (
            <div className="w-full pt-20 h-96">
                <div className=" w-full pt-[10%]">
                    <RevolvingDot
                        height="100"
                        width="100"
                        radius="40"
                        color="#4fa94d"
                        secondaryColor="#5fa94a"
                        ariaLabel="revolving-dot-loading"
                        wrapperStyle={{ height: 300, width: 300 }}
                        wrapperClass=" mx-auto"
                        visible={true}
                    />
                </div>
                <h1 className="text-center h-28">Loading...</h1>
            </div>
        );
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default InstructorRoute;
