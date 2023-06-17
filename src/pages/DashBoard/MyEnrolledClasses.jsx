import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle";

const MyEnrolledClasses = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token");
    const { data: classes = [], } = useQuery(["enrolledClasses"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/enrolledClasses/${user.email}`,
            {
                headers: { authorization: `bearer ${token}` },
            }
        );
        return await res.json();
    });
    console.log(classes);
    return (
        <>
            <SectionTitle heading={"Enrolled classes"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr className="bg-blue-300">
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price USD</th>

                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classData, index) => {
                            const {
                                _id,
                                availableSeats,

                                className,
                                instructor_mail,
                                instructor_name,
                                price,
                            } = classData;

                            return (
                                <tr key={_id}>
                                    <th>{index + 1}</th>
                                    <td>{className}</td>
                                    <td>{instructor_name}</td>
                                    <td>{instructor_mail}</td>
                                    <td>{availableSeats}</td>
                                    <td>$ {price}</td>


                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyEnrolledClasses;
