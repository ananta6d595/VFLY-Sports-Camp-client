import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiBookmarkAlt } from "react-icons/bi";
import { GrRadialSelected } from "react-icons/gr";
const DashBoardMenu = ({ children }) => {
    // TODO: checking isAdmin and isInstructor dynamic
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    // admin menu navigation
    const adminMenu = (
        <>
            <li>
                <NavLink to="manageClass">
                    {" "}
                    <MdOutlineStackedLineChart></MdOutlineStackedLineChart>{" "}
                    Manage Classes
                </NavLink>
            </li>
            <li>
                <NavLink to="manageUsers">
                    <FiUsers></FiUsers> Manage Users
                </NavLink>
            </li>
        </>
    );

    const instructorMenu = (
        <>
            <li>
                <NavLink to="addClass">
                    <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> Add a Class
                </NavLink>
            </li>
            <li>
                <NavLink to="instructorClasses">
                    <BiBookmarkAlt></BiBookmarkAlt>My Classes
                </NavLink>
            </li>
        </>
    );
    const studentMenu = (
        <>
            <li>
                <NavLink to="selectedClass">
                    <GrRadialSelected></GrRadialSelected>My Selected Classes
                </NavLink>
            </li>
            <li>
                <NavLink to="enrolledClass">My Enrolled Classes</NavLink>
            </li>
        </>
    );
    return (
        <>
            <div className="z-10 drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="items-center drawer-content md:pt-2">
                    <label
                        htmlFor="my-drawer-2"
                        className="fixed drawer-button lg:hidden">
                        <RxHamburgerMenu className="mt-3 ms-2" />
                    </label>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side md:z-20">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay "></label>
                    <ul className="h-full p-4 font-semibold text-white bg-blue-500 menu w-80 rounded-2xl">
                        {/* Sidebar content here */}

                        <h1 className="p-2 mb-12 italic font-black text-center uppercase border-2 border-orange-400 rounded-2xl">
                            {isAdmin == true
                                ? "Admin's DASHBOARD"
                                : isInstructor == true
                                ? "Instructor's DASHBOARD"
                                : "Student's DASHBOARD"}
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
                            <NavLink to="/">
                                <HiOutlineHome></HiOutlineHome> Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashBoardMenu;
