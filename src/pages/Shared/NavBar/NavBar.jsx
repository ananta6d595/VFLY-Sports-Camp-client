import Container from "../../../components/Container";
import Logo from "./Logo";
import ProfileLoginLogout from "./ProfileLoginLogout";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
            {/* //TODO: make dashboard link dynamic. when clicking it should show 1st menus page  */}
            <NavLink
                to="/dashboard"
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
            <div className="w-full fixed z-30">
                <Container>
                    <div className="grid grid-cols-3 lg:grid-cols-4 items-center h-16  backdrop-blur-md">
                        <div className="dropdown lg:hidden">
                            <label
                                tabIndex={0}
                                className="btn  ms-6 bg-white opacity-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                                className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 bg-opacity-90 p-4 rounded-box w-52">
                                {navList}
                            </ul>
                        </div>
                        <Logo></Logo>
                        <div className="col-span-2 hidden lg:flex gap-5 justify-center text-white bg-blue-500 bg-opacity-40 p-2 rounded-3xl ">
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
