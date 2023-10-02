import Container from "../../../components/Container";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import Logo from "./Logo";
import ProfileLoginLogout from "./ProfileLoginLogout";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const navList = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-lg px-4 rounded-3xl bg-white bg-opacity-50  text-gray-900 "
                        : "px-4 text-xl "
                }>
                Home
            </NavLink>
            <NavLink
                to="/instructors"
                className={({ isActive }) =>
                    isActive
                        ? "text-lg px-4 rounded-3xl bg-white bg-opacity-50  text-gray-900 "
                        : "px-4 text-xl "
                }>
                Instructors
            </NavLink>
            <NavLink
                to="/classes"
                className={({ isActive }) =>
                    isActive
                        ? "text-lg px-4 rounded-3xl bg-white bg-opacity-50  text-gray-900 "
                        : "px-4 text-xl "
                }>
                Classes
            </NavLink>
            {/* //TODO: make dashboard link dynamic. when clicking it should show 1st menus page.
                did it but it doesn't rerender the dashboard.
            */}
            <NavLink
                to={
                    isAdmin == true
                        ? "/dashboard/manageClass"
                        : isInstructor == true
                        ? "/dashboard/addClass"
                        : "/dashboard/selectedClass"
                }
                className={({ isActive }) =>
                    isActive
                        ? "text-lg px-4 rounded-3xl bg-white bg-opacity-50  text-gray-900 "
                        : "px-4 text-xl "
                }>
                Dashboard
            </NavLink>
        </>
    );
    return (
        <>
            <div className="fixed z-30 w-full">
                <Container>
                    <div className="grid items-center h-16 grid-cols-3 lg:grid-cols-4 backdrop-blur-md">
                        <div className="dropdown lg:hidden">
                            <label
                                tabIndex={0}
                                className="bg-white opacity-50 btn ms-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="p-4 mt-3 shadow menu menu-compact dropdown-content bg-base-100 bg-opacity-90 rounded-box w-52">
                                {navList}
                            </ul>
                        </div>
                        <Logo></Logo>
                        <div className="justify-center hidden col-span-2 gap-5 p-2 text-white bg-blue-500 lg:flex bg-opacity-40 rounded-3xl ">
                            {navList}
                        </div>
                        <ProfileLoginLogout></ProfileLoginLogout>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NavBar;
