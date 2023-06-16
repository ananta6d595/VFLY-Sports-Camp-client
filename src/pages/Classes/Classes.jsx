/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
    // show only approved classes
    // filter classes which has approved status and then store in a list.
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const { data: classes = [] } = useQuery(
        ["approvedClasses"],
        async () => {
            const res = await fetch(
                `${import.meta.env.VITE_server}/approvedClasses`
            );
            return await res.json();
        }
    );

    const handelSelect = (id) => {
        /* - Select Button. After selecting the button if the user is not logged in,
        then tell the user to log in before selecting the course.
        সিলেক্ট বাটনে ক্লিক করলে, ওই ক্লাসটাকে ওই ইউজারের ইমেইল সহ
                আপনার ডাটাবেজে সিলেক্টেড ক্লাস কালেকশনে রাখতে হবে.
         */

        if (user) {
            const saveSelectedClass = {
                class_id: id,
                email: user?.email,
            };
            axios
                .patch(
                    `${import.meta.env.VITE_server}/selectedClasses`,
                    saveSelectedClass
                )
                .then((dataObj) => {
                    console.log(dataObj);
                    if (dataObj.data.upsertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "class Selected",
                            timer: 1500,
                        });
                    } else if (dataObj.data.matchedCount) {
                        Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "class already selected",
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Please, login first.",
                timer: 1500,
            });
            navigate("/login", { state: { from: location } });
        }
    };

    //
    return (
        <Container>
            <div className="pt-16"></div>
            <SectionTitle heading={"Available Classes"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5">
                {classes.map((classData) => {
                    const {
                        _id,
                        className,
                        instructor_name,
                        classImage,
                        availableSeats,
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
                                <p className="border border-blue-600 rounded-3xl  ps-2 p-1">
                                    Price:{" "}
                                    <span className="font-medium text-lg">
                                        {" "}
                                        {price}
                                    </span>{" "}
                                </p>
                                <button
                                    onClick={() => handelSelect(_id)}
                                    className="btn bg-blue-600  hover:bg-blue-500 text-white font-bold"
                                    disabled={
                                        availableSeats == 0 ||
                                        isAdmin ||
                                        isInstructor
                                            ? true
                                            : false
                                    }>
                                    S e l e c t
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Classes;
