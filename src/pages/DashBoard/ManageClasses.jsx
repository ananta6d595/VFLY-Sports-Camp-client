import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";

const ManageClasses = () => {
    // const { user } = useAuth();
    const token = localStorage.getItem("access-token");
    const { data: classes = [], refetch } = useQuery(
        ["allClasses"],
        async () => {
            const res = await fetch(
                `${import.meta.env.VITE_server}/allClasses`,
                {
                    headers: { authorization: `bearer ${token}` },
                }
            );
            return await res.json();
        }
    );

    const handleStatus = (status, _id) => {
        axios
            .patch(`${import.meta.env.VITE_server}/updateStatus`, {
                status: status,
                id: _id,
            })
            .then((dataObj) => {
                console.log(dataObj);
                refetch();
                Swal.fire({
                    position: "center",
                    icon: `${status === "denied" ? "warning" : "success"}`,
                    title: `${status}`,
                    showConfirmButton: false,
                    timer: 1000,
                });
            });
    };

    return (
        <div>
            <SectionTitle heading={"All Classes"}></SectionTitle>

            <div className="w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5">
                {classes.map((classData) => {
                    const {
                        _id,
                        availableSeats,
                        classImage,
                        className,
                        instructor_mail,
                        instructor_name,
                        price,
                        status,
                    } = classData;

                    return (
                        <div
                            key={_id}
                            className="card  w-full mx-auto bg-base-100 shadow-xl hover:shadow-blue-600 hover:backdrop-blur-3xl image-full">
                            <figure>
                                <img src={classImage} />
                            </figure>
                            <div className=" p-5 text-white z-10 ">
                                <h2 className="card-title">{className}</h2>
                                <p> Instructor: {instructor_name}</p>
                                <p className="mb-3">Email: {instructor_mail}</p>
                                <p>Available Seats: {availableSeats}</p>
                                <p> Price: {price}</p>
                                <p> Status: {status}</p>
                                <div className=" flex flex-col gap-4 mt-3 ">
                                    <button
                                        onClick={() =>
                                            handleStatus("approved", _id)
                                        }
                                        className="btn btn-primary mt-auto w-full bg-emerald-600 hover:bg-emerald-500 hover:text-black"
                                        disabled={
                                            classData.status === "pending"
                                                ? false
                                                : true
                                        }>
                                        approve
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleStatus("denied", _id)
                                        }
                                        className="btn btn-primary mt-auto w-full bg-rose-600 hover:bg-rose-500 hover:text-black"
                                        disabled={
                                            classData.status === "pending"
                                                ? false
                                                : true
                                        }>
                                        Deny
                                    </button>
                                    <Link to={`feedback/${_id}`}>
                                        <button
                                            // onClick={ }
                                            className="btn text-white border-0 mt-auto w-full bg-cyan-600 hover:bg-cyan-500 hover:text-black">
                                            Send FeedBack
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ManageClasses;
