import { NavLink } from "react-router-dom";

const MySelectedClasses = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>football camp</td>
                            <td>alek boot</td>
                            <td>
                                <button className="btn bg-rose-400 hover:bg-rose-600 hover:text-white">
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
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MySelectedClasses;
