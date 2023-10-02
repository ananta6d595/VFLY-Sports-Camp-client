import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";
import Swal from "sweetalert2";
// import useTitle from "../../hooks/useTitle";

const SignUp = () => {
    // useTitle("Register");
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(null);
    const [isHide, setHide] = useState(true);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleHideEye = (event) => {
        event.preventDefault();
        setHide(!isHide);
    };
    const onSubmit = (data) => {
        // console.log(data);
        // console.log(import.meta.env.VITE_server);
        createUser(data.email, data.password)
            .then((res) => {
                const createdUser = res.user;
                updateProfile(createdUser, {
                    // why updateProfile working here not in Auth provider
                    displayName: data.name,
                    photoURL: data.image,
                }).then(() => {
                    // save user in mongodb
                    const saveUser = {
                        name: data.name,
                        email: data.email,
                        image: data.image,
                    };
                    fetch(`${import.meta.env.VITE_server}/users`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(saveUser),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            // console.log(data);
                            if (data.upsertedId) {
                                reset();
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Signed Up",
                                    timer: 1000,
                                });
                                navigate("/");
                            }
                        });
                });
            })
            .catch((error) => console.log(error.message));
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
                                    Sign Up
                                </h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative mb-6">
                                    <input
                                        placeholder="name"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="name">
                                        Name
                                    </label>
                                    {errors.name && (
                                        <span>This field is required</span>
                                    )}{" "}
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        placeholder="Url"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                        {...register("image")}
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="email">
                                        Image Url
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        placeholder="email"
                                        type="email"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="email">
                                        Email
                                    </label>
                                    {errors.email && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        type={isHide ? "password" : "text"}
                                        placeholder="password"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                        {...register("password", {
                                            required: true,
                                            pattern: {
                                                value: /^(?=.*?[A-Z])(?=.*?[\W_]).{6,}$/i,
                                                message:
                                                    "Password should have at least 6 characters, one capital letter and one special character",
                                            },
                                        })}
                                    />
                                    <button
                                        className=" absolute right-1 top-4"
                                        onClick={handleHideEye}>
                                        {isHide ? (
                                            <BsEyeSlash></BsEyeSlash>
                                        ) : (
                                            <FaEye></FaEye>
                                        )}
                                    </button>

                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        htmlFor="password">
                                        Password
                                    </label>
                                    {errors.password && (
                                        <span>This field is required</span>
                                    )}
                                    {errors.password?.message && (
                                        <p>{errors.password?.message}</p>
                                    )}
                                </div>
                                <input
                                    className=" w-full mx-auto btn  bg-blue-600 mb-4"
                                    type="submit"
                                    value="Sign up"
                                />
                            </form>
                            <div className="text-center">
                                <span className="text-gray-700">
                                    Or SignUp with:
                                </span>

                                <SocialLogin></SocialLogin>
                                <p className="mt-4">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-blue-500">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
