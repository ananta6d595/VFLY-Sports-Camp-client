import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Instructors = () => {
    const token = localStorage.getItem("access-token");

    const { data: instructors = [] } = useQuery(["users"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/users/instructor`,
            {
                headers: { authorization: `bearer ${token}` },
            }
        );
        return await res.json();
    })


    return (
        <Container>
            <div className="pt-16"></div>
            <SectionTitle heading={"Instructors"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5">
                {instructors.map((instructor) => {
                    return (
                        <div
                            key={instructor._id}
                            className="card card-compact md:flex-row w-full h-full bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={instructor.image}
                                    className="h-[250px] object-cover w-full rounded-2xl"
                                />
                            </figure>
                            <div className="card-body  justify-center">
                                <h2 className="card-title ">
                                    {instructor.name}
                                </h2>
                                <p className="text-lg ">Email: {instructor.email}</p>
                                {/* <p className="border border-blue-600 rounded-3xl flex-grow-0 ps-2 p-1">
                                    Classes: 7
                                </p> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Instructors;
