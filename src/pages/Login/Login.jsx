import { Form, Link, useLocation, useNavigate } from "react-router-dom";
// import useTitle from "../../hooks/useTitle";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
    // useTitle("Login");
    const [error, setError] = useState(null);
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const HandelSignIn = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        signInUser(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);

                if (error.message.includes("email-already-exists")) {
                    setError("Email already exists");
                }
                if (error.message.includes("wrong-password")) {
                    setError("Wrong password");
                }
                if (error.message.includes("auth/user-not-found")) {
                    setError("User not found");
                }
            });
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 w-full sm:max-w-xl sm:mx-auto md:mx-[24%] lg:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-3xl font-semibold mb-2 text-center">
                                    Login
                                </h1>
                                <p className="text-center">
                                    For admin role: <br />
                                    ph@gmail.com <br />
                                    pass: ASD!@#
                                    <br /> <br />
                                    For Instructor: <br /> email: luke@gmail.com
                                    <br /> password: ASD!@# <br />
                                    <br />
                                    By default other accounts will have student
                                    role.
                                    <br />
                                    <br />
                                </p>
                            </div>
                            <Form onSubmit={HandelSignIn} className=" mb-4">
                                <div className="mb-4 relative">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>
                                <div className="mb-4 relative">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Password
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                        type="submit">
                                        Sign In
                                    </button>
                                </div>
                            </Form>
                            <div className="text-center">
                                <span className="text-gray-700">
                                    Or login with:
                                </span>

                                <SocialLogin></SocialLogin>

                                <p className="mt-4">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        to="/signup"
                                        className="text-blue-500">
                                        Sign Up
                                    </Link>
                                </p>
                                <p className="text-rose-700">{error}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
