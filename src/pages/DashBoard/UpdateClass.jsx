import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle";
const UpdateClass = () => {
    const { user } = useAuth();
    const { _id, className, classImage, availableSeats, price } =
        useLoaderData();
    console.log(className, classImage, availableSeats, price);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const saveUpdateClass = {
            className: data.className || className,
            classImage: data.classImage || classImage,
            availableSeats: data.availableSeats || availableSeats,
            price: data.price || price,
        };

        // send update to server
        axios
            .patch(
                `${import.meta.env.VITE_server}/instructor/updateClass/${_id}`,
                saveUpdateClass
            )
            .then((dataObj) => {
                if (dataObj.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New Class added for pending ",
                        timer: 1000,
                    });
                }
            });
    };

    return (
        <div className=" p-2 md:px-12 md:w-[800px] lg:w-2/3  mx-auto">
            <SectionTitle heading={"Update a Class"}></SectionTitle>
            <div className="md:flex gap-9">
                <h1 className="italic mb-2">
                    {" "}
                    <span className="badge">Instructor:</span>{" "}
                    {user.displayName}
                </h1>
                <h1 className="italic mb-12">
                    <span className="badge">Email:</span>
                    {user.email}
                </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid md:grid-cols-2 gap-9">
                    <div className="mb-9">
                        <h4 className="italic">Class Name</h4>
                        <input
                            className="input-field w-full"
                            placeholder={className}
                            {...register("className")}
                        />
                        {errors.className?.type === "required" && (
                            <p className="text-red-500">
                                Class Name is required
                            </p>
                        )}
                    </div>

                    <div className="mb-9">
                        <h4 className="italic"> Upload Image </h4>
                        <input
                            className="input-field w-full"
                            placeholder={classImage}
                            {...register("classImage")}
                        />
                    </div>

                    <div className="mb-9">
                        <h4 className="italic"> Available Seats </h4>
                        <input
                            className="input-field w-full "
                            placeholder={availableSeats}
                            {...register("availableSeats")}
                        />
                        {errors.availableSeats?.type === "required" && (
                            <p className="text-red-500"> required</p>
                        )}
                    </div>

                    <div className="mb-9">
                        <h4 className="italic">Price </h4>
                        <input
                            className="input-field w-full"
                            placeholder={price}
                            {...register("price")}
                        />
                        {errors.price?.type === "required" && (
                            <p className="text-red-500"> required</p>
                        )}
                    </div>
                </div>
                <button className="btn btn-primary italic w-full" type="submit">
                    {" "}
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateClass;
