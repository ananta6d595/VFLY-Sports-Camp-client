import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import FeedBackModal from "../../components/FeedBackModal/FeedBackModal";

/*  Each Class will show relevant information, including **pending/ approved/ denied** status, **Total Enrolled Students**, **Feedback** & **Update button**.
    - **Total Enrolled Students:** Initially it will be zero. If any student has successfully booked the Class, show the total number of students.
    - **Feedback:**
        - There will be no feedback if the Class is in pending or approved status.
        - If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column. */
const InstructorClasses = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token");
    const { data: classes = [] } = useQuery(["classes"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/instructor/classes/${user.email}`,
            {
                headers: { authorization: `bearer ${token}` },
            }
        );
        return await res.json();
    });

    // console.log(classes);
    return (
        <div>
            <div className="pt-2"></div>
            <SectionTitle heading={"All Added Classes"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Available seats</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classDetail, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{classDetail.className}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{classDetail.price}</td>
                                    <td>{classDetail.availableSeats}</td>
                                    <td>{classDetail.enrolled}</td>
                                    <td>{classDetail.status}</td>
                                    <td>
                                        {classDetail.status == "denied" ? (
                                            <FeedBackModal></FeedBackModal>
                                        ) : (
                                            "No feedback"
                                        )}
                                    </td>
                                    <td>
                                        <NavLink
                                            to={`updateClass/${classDetail._id}`}>
                                            <button className="btn btn-success">
                                                Update
                                            </button>
                                        </NavLink>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;
