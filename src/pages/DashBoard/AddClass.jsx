import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const AddClass = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        const saveNewClass = {
            className: data.className,
            classImage: data.classImage,
            availableSeats: parseInt(data.availableSeats),
            price: data.price,
            enrolled: 0,
            instructor_name: user.displayName,
            instructor_mail: user.email,
            status: "pending",
        };
        // // fetch(`${import.meta.env.VITE_server}/classes`)
        axios
            .post(
                `${import.meta.env.VITE_server}/instructor/addClass`,
                saveNewClass
            )
            .then((dataObj) => {
                // console.log(dataObj);
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

    // console.log(watch("example"));
    return (
        <div className=" p-2 md:px-12 md:w-[800px] lg:w-2/3  mx-auto">
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
                            placeholder="Class Name"
                            {...register("className", { required: true })}
                        />
                        {errors.className?.type === "required" && (
                            <p className="text-red-500">Class Name is required</p>
                        )}
                    </div>
                    {/* // TODO: Upload image in imgbb */}
                    <div className="mb-9">
                        <h4 className="italic"> Upload Image </h4>
                        <input
                            className="input-field w-full"
                            placeholder="Image Url"
                            {...register("classImage")}
                        />
                    </div>

                    <div className="mb-9">
                        <h4 className="italic"> Available Seats </h4>
                        <input
                            className="input-field w-full "
                            placeholder="Seat Number"
                            {...register("availableSeats", { required: true })}
                        />
                        {errors.availableSeats?.type === "required" && (
                            <p className="text-red-500"> required</p>
                        )}
                    </div>

                    <div className="mb-9">
                        <h4 className="italic">Price </h4>
                        <input
                            className="input-field w-full"
                            placeholder="Price in USD"
                            {...register("price", { required: true })}
                        />
                        {errors.price?.type === "required" && (
                            <p className="text-red-500"> required</p>
                        )}
                    </div>
                </div>
                <button className="btn btn-primary italic w-full" type="submit">
                    {" "}
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddClass;
