import SectionTitle from "../../components/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";

const PopularClasses = () => {
    // show only approved classes
    // filter classes which has approved status and then store in a list.
    const { data: classes = [] } = useQuery(["popularClasses"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/popularClasses`
        );
        return await res.json();
    });

    
    return (
        <Container>
            <div className="pt-16"></div>
            <SectionTitle heading={"Popular classes"} subHeading={"Our Most hyped classes"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5">
                {classes.map((classData) => {
                    const {
                        _id,
                        className,
                        instructor_name,
                        classImage,
                        availableSeats,
                        enrolled,
                        price,
                    } = classData;
                    return (
                        <div
                            key={_id}
                            className={`card card-compact w-full shadow-xl ${
                                availableSeats == 0
                                    ? "bg-rose-400"
                                    : "bg-base-100"
                            }`}>
                            <figure>
                                <img
                                    src={classImage}
                                    className="h-[250px] object-cover w-full rounded-2xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title uppercase italic underline">
                                    {className}
                                </h2>
                                <p>
                                    Instructor:{" "}
                                    <span className="font-medium text-lg">
                                        {instructor_name}
                                    </span>{" "}
                                </p>
                                <p>
                                    seats:{" "}
                                    <span className="font-medium text-lg">
                                        {availableSeats}
                                    </span>
                                </p>
                                <p>
                                    enrolled:{" "}
                                    <span className="font-medium text-lg">
                                        {enrolled}
                                    </span>
                                </p>
                                <p className="border border-blue-600 rounded-3xl  ps-2 p-1">
                                    Price:{" "}
                                    <span className="font-medium text-lg">
                                        {" "}
                                        {price}
                                    </span>{" "}
                                </p>

                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default PopularClasses;
