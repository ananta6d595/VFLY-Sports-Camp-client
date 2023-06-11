import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";

const FeedBack = () => {
    {
        const { register, handleSubmit, watch } = useForm();
        const onSubmit = (data) => console.log(data);

        console.log(watch("feedback"));
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

                    <button
                        className="btn btn-primary italic w-full"
                        type="submit">
                        {" "}
                        Send
                    </button>
                </form>
            </div>
        );
    }
};

export default FeedBack;
