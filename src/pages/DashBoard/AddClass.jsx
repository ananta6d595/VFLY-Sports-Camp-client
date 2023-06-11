import { useForm } from "react-hook-form";
const AddClass = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));
    return (
        <div className=" p-2 md:px-12 md:w-[800px] lg:w-2/3  mx-auto">
            <div className="md:flex gap-9">
                <h1 className="italic mb-2">
                    {" "}
                    <span className="badge">Instructor:</span> Alek bott
                </h1>
                <h1 className="italic mb-12">
                    <span className="badge">Email:</span> Alekbott@gmail.com
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
                    <div className="mb-9">
                        <h4 className="italic"> Upload Image </h4>
                        <input
                            className="input-field w-full"
                            placeholder="Image Url"
                            {...register("uploadImage")}
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
