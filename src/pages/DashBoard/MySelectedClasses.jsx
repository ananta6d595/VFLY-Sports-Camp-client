import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token");
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/selectedClasses/${user.email}`,
            {
                headers: { authorization: `bearer ${token}` },
            }
        );
        return await res.json();
    });

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            position: "center",
            icon: "warning",
            title: `Are you sure?`,
            showConfirmButton: true,
            // timer: 1000,
        });
        axios.delete(`${import.meta.env.VITE_server}/selected/${id}`);
        refetch();
    }

    return (
        <>
            <SectionTitle heading={"Selected classes"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr className="bg-blue-300">
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th className="bg-rose-400">Delete</th>
                            <th>Pay</th>
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

                            } = classData;

                            return (
                                <tr key={_id}>
                                    <th>{index + 1}</th>
                                    <td>{className}</td>
                                    <td>{instructor_name}</td>
                                    <td>{instructor_mail}</td>
                                    <td>{availableSeats}</td>
                                    <td>
                                        <button
                                            onClick={()=>handleDelete(_id)}
                                            className="btn bg-rose-400 hover:bg-rose-600 hover:text-white">
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <NavLink>
                                            {" "}
                                            <button className="btn bg-cyan-400 hover:bg-blue-500 hover:text-white">
                                                Pay Now
                                            </button>
                                        </NavLink>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MySelectedClasses;
