import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
// import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const FeedBack = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const onSubmit = (data) => {
        const saveUpdateClass = {
            feedback: data.feedback,
        };
        console.log(data.feedback);
        // send update to server
        axios
            .patch(
                `${import.meta.env.VITE_server}/feedBack/${id}`,
                saveUpdateClass
            )
            .then((dataObj) => {
                console.log(dataObj);
                if (dataObj.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "info",
                        title: "Feedback sent!",
                        timer: 1500,
                    });
                }
                reset();
            });
    };

    return (
        <div className=" p-2 md:px-12 md:w-[800px] lg:w-2/3  mx-auto">
            <SectionTitle heading={"Feedback"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-9">
                    <input
                        className="input-field w-full input-lg"
                        placeholder="reason for denial"
                        {...register("feedback")}
                    />
                </div>

                <button className="btn btn-primary italic w-full" type="submit">
                    {" "}
                    Send
                </button>
            </form>
        </div>
    );
};

export default FeedBack;
