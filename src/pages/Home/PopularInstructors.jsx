import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";

const PopularInstructors = () => {
    const { data: instructors = [] } = useQuery(["favInstructor"], async () => {
        const res = await fetch(`${import.meta.env.VITE_server}/favInstructor`);
        return await res.json();
    });


    return (
        <div className="mb-12">
            <SectionTitle
                heading={"Our Star Instructors"}
                subHeading={
                    "Favorite instructors of most students"
                }></SectionTitle>

            <div className=" w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {instructors.map((instructor) => {
                    const { _id, image, email, name } = instructor;
                    return (
                        <div
                            key={_id}
                            className="card w-10/12 mx-auto bg-base-100 drop-shadow-xl shadow-md shadow-blue-300">
                            <figure>
                                <img
                                    src={image}
                                    className="h-80 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <div className="badge bg-blue-500 text-white p-3">
                                    {email}
                                </div>
                                
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularInstructors;
