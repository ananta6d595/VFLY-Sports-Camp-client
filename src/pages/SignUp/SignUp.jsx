import { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
// import useTitle from "../../hooks/useTitle";

const SignUp = () => {
    // useTitle("Register");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { createUser } = useContext(AuthContext);
    const HandelSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        const photo = event.target.photo.value;

        setError("");
        setSuccess("");

        if (password != confirm) {
            setError("Confirm password doesn't match!");
            return;
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        } else if (password == null) {
            setError("Password required");
            return;
        } else if (email == null) {
            setError("Email required");
            return;
        }

        createUser(email, password)
            .then((res) => {
                const createdUser = res.user;
                updateProfile(createdUser, {
                    // why updateProfile working here not in Auth provider
                    displayName: name,
                    photoURL: photo,
                });
                setSuccess("Registration Complete");
            })
            .catch((error) => setError(error.message));
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 w-full sm:max-w-xl sm:mx-auto md:mx-[24%] lg:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold mb-7 text-center">
                                    Register
                                </h1>
                            </div>
                            <Form onSubmit={HandelSignUp}>
                                <div className="relative mb-6">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="name">
                                        Name
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="email">
                                        Email
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="photo"
                                        name="photo"
                                        type="text"
                                        placeholder="Photo Url"
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="email">
                                        Photo Url
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="confirm"
                                        name="confirm"
                                        type="password"
                                        placeholder="Confirm"
                                        required
                                    />{" "}
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="password">
                                        Confirm
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
                                        type="submit">
                                        Sign Up
                                    </button>
                                </div>
                                <div className="text-center">
                                    <p className="mt-4">
                                        Already have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="text-blue-500">
                                            Sign In
                                        </Link>
                                    </p>
                                    <p className="text-rose-700">{error}</p>
                                    <p className="text-emerald-800">
                                        {success}
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
