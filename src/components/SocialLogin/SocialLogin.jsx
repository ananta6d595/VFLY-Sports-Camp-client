import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGooglSignIn = () => {
        googleSignIn().then((result) => {
            // console.log(result.user);

            const loggedUser = result.user;
            const saveUser = { name: loggedUser.name, email: loggedUser.email };

            fetch(`${import.meta.env.VITE_server}/users`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.upsertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "User Saved & signIn success",
                            timer: 1000,
                        });
                        navigate(from, { replace: true });
                    } else if (data.matchedCount === 1) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "success, Google signIn",
                            timer: 1000,
                        });
                        navigate(from, { replace: true });
                    }
                });
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
