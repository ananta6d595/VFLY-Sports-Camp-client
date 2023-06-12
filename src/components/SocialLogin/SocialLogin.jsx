import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGooglSignIn = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
            navigate(from, { replace: true });
        });
    };

    return (
        <div className="flex justify-center mt-2">
            <button
                onClick={handleGooglSignIn}
                className="bg-white hover:bg-blue-50  text-blue-700  hover:text-2xl duration-200  font-semibold py-4 px-6 hover:py-3 hover:px-5 border-2 shadow-md shadow-blue-600 hover:shadow-sm border-blue-400 rounded-3xl">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;
