import SectionTitle from "../../components/SectionTitle";

const ManageUsers = () => {
    const users = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "Marjan",
            role: "admin",
            email: "alanbott@gmail.com",
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "Marjan",
            role: "instructor",
            email: "alanbott@gmail.com",
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "Marjan",
            role: "student",
            email: "alanbott@gmail.com",
        },
    ];
    return (
        <div>
            <div className="pt-2"></div>
            <SectionTitle heading={"All Users"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img
                                            src={user.image}
                                            alt=""
                                            className="mask mask-squircle h-12 hover:h-20 duration-200"
                                        />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>

                                    <td>
                                        <button
                                            className="btn bg-orange-300"
                                            disabled={user.role !== "student"}>
                                            admin
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            disabled={user.role !== "student"}>
                                            instructor
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

export default ManageUsers;
