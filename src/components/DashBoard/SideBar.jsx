import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
    // TODO: checking isAdmin and isInstructor dynamic
    const isAdmin = false;
    const isInstructor = true;

    // admin menu navigation
    const adminMenu = (
        <>
            <li>
                <NavLink to="selectedClass">My Selected Classes</NavLink>
            </li>
            <li>
                <NavLink to="enrolledClass">My Enrolled Classes</NavLink>
            </li>
        </>
    );

    const instructorMenu = (
        <>
            <li>
                <NavLink to="addClass">Add a Class</NavLink>
            </li>
            <li>
                <NavLink to="instructorClasses">My Classes</NavLink>
            </li>
        </>
    );
    const studentMenu = (
        <>
            <li>
                <NavLink to="selectedClass">My Selected Classes</NavLink>
            </li>
            <li>
                <NavLink to="enrolledClass">My Enrolled Classes</NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center md:pt-9">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden">
                        Open Menu
                    </label>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full rounded-2xl bg-blue-500 text-white font-semibold">
                        {/* Sidebar content here */}
                        {/* // TODO: Make Dynamic   */}
                        <h1 className="text-center mb-12 p-2 border-2 rounded-2xl border-orange-400 italic font-black uppercase">
                            {isAdmin == true
                                ? "ADMIN's DASHBOARD"
                                : isInstructor == true
                                ? "Instructor's DASHBOARD"
                                : "Student's DashBoard"}
                        </h1>
                        {isAdmin == true
                            ? adminMenu
                            : isInstructor == true
                            ? instructorMenu
                            : studentMenu}
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
