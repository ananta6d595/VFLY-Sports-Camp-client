import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isInstructor, isInstructorLoading ] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return (
            <div className="h-96 w-full pt-20">
                <h1 className="h-28 text-center">loading...</h1>
                {/* <img src="/src/assets/giphy.webp" className="h-28 mx-auto" /> */}
            </div>
        );
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default InstructorRoute;
