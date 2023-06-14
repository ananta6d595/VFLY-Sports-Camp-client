import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const AddClass = () => {
    const { user } = useAuth();

    const { register, handleSubmit, watch, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const saveNewClass = {
            className: data.className,
            classImage: data.classImage,
            availableSeats: data.availableSeats,
            price: data.price,
            instructor_name: user.displayName,
            instructor_mail: user.email,
            status: "pending",
        };
        // // fetch(`${import.meta.env.VITE_server}/classes`)
        axios
            .post(`${import.meta.env.VITE_server}/instructor/addClass`, saveNewClass)
            .then((dataObj) => {
                // console.log(dataObj);
                if (dataObj.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Signed Up",
                        timer: 1000,
                    });
                }});
    };

    console.log(watch("example"));
    return (
        <div className=" p-2 md:px-12 md:w-[800px] lg:w-2/3  mx-auto">
            <div className="md:flex gap-9">
                <h1 className="italic mb-2">
                    {" "}
                    <span className="badge">Instructor:</span> {user.displayName}
                </h1>
                <h1 className="italic mb-12">
                    <span className="badge">Email:</span>{user.email}
                </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid md:grid-cols-2 gap-9">
                    <div className="mb-9">
                        <h4 className="italic">Class Name</h4>
                        <input
                            className="input-field w-full"
                            placeholder="Class Name"
                            {...register("className")}
                        />
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
                            {...register("availableSeats")}
                        />
                    </div>

                    <div className="mb-9">
                        <h4 className="italic">Price </h4>
                        <input
                            className="input-field w-full"
                            placeholder="Price in USD"
                            {...register("price")}
                        />
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
