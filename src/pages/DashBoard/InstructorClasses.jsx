import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";

/*  Each Class will show relevant information, including **pending/ approved/ denied** status, **Total Enrolled Students**, **Feedback** & **Update button**.
    - **Total Enrolled Students:** Initially it will be zero. If any student has successfully booked the Class, show the total number of students.
    - **Feedback:**
        - There will be no feedback if the Class is in pending or approved status.
        - If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column. */
const InstructorClasses = () => {
    const { user } = useAuth();
    const classes = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",

            seats_available: 12,
            enrolled: 0,
            status: "denied",
            feedback:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti ratione nobis hic nulla? Fugit, voluptatibus quidem, facere velit a voluptatum est distinctio eaque architecto incidunt nulla eius necessitatibus mollitia.",
            price: 234,
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",

            seats_available: 0,
            enrolled: 0,
            status: "pending",
            feedback: "",
            price: 234,
        },
        {
            image: "https://static.wixstatic.com/media/70ef0f_39572f6d49be4dcf8426156377dcab39~mv2.png/v1/fill/w_864,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/summer%20camp%20free%20kick%202023.png",
            name: "FootBall Class",

            seats_available: 25,
            enrolled: 0,
            status: "pending",
            feedback:
                "",
            price: 234,
        },
    ];
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classDetail, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{classDetail.name}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{classDetail.price}</td>
                                    <td>{classDetail.seats_available}</td>
                                    <td>{classDetail.enrolled}</td>
                                    <td>{classDetail.status}</td>
                                    <td>
                                        {classDetail.status == "denied" ? (
                                            <button className="btn bg-yellow-300">
                                                Feed Back
                                            </button>
                                        ) : (
                                            "No feedback"
                                        )}
                                    </td>
                                    <td>
                                        <button className="btn btn-success">
                                            Update
                                        </button>
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
