import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { MdDeleteOutline } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const token = localStorage.getItem('access-token');

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch(`${import.meta.env.VITE_server}/users`, {
            headers: { authorization: `bearer ${token}`
        }});
        return await res.json();
    });
    const handleRoleChanger = (user, role) => {
        fetch(`${import.meta.env.VITE_server}/${role}/${user._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name || user.email} is an ${role} Now!`,
                        showConfirmButton: false,
                        timer: 1000,
                    });
                }
            });
    };

    const handelDeleteUser = () => {};
    return (
        <div>
            <div className="pt-2"></div>
            <SectionTitle heading={`${users?.length} Users`}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs mx-auto max-w-7xl table-zebra md:table-md lg:table-lg">
                    <thead className="bg-sky-400">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th className="bg-green-300 text-center">Admin</th>
                            <th className="bg-orange-300 text-center">
                                Instructor
                            </th>
                            <th className="bg-rose-400 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>

                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>

                                    <td className="text-center">
                                        <button
                                            onClick={() =>
                                                handleRoleChanger(user, "admin")
                                            }
                                            className="btn bg-green-300 hover:bg-green-400 hover:text-white"
                                            disabled={user.role === "admin"}>
                                            {user.role === "admin" ? (
                                                <SiOpenaccess></SiOpenaccess>
                                            ) : (
                                                "admin"
                                            )}
                                        </button>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() =>
                                                handleRoleChanger(
                                                    user,
                                                    "instructor"
                                                )
                                            }
                                            className="btn bg-orange-300 hover:bg-orange-400 hover:text-white"
                                            disabled={
                                                user.role === "instructor"
                                            }>
                                            {user.role == "instructor" ? (
                                                <GiTeacher></GiTeacher>
                                            ) : (
                                                "instructor"
                                            )}
                                        </button>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() =>
                                                handelDeleteUser(user._id)
                                            }
                                            className="btn btn-error  hover:bg-rose-500 hover:text-white">
                                            <MdDeleteOutline></MdDeleteOutline>
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

// const users = [
//     {
//         image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
//         name: "Marjan",
//         role: "admin",
//         email: "alanbott@gmail.com",
//     },
//     {
//         image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
//         name: "Marjan",
//         role: "instructor",
//         email: "alanbott@gmail.com",
//     },
//     {
//         image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
//         name: "Marjan",
//         role: "student",
//         email: "alanbott@gmail.com",
//     },
// ];
