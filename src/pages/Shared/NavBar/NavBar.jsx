
import Container from "../../../components/Container";
import Logo from "./Logo";
import ProfileLoginLogout from "./ProfileLoginLogout";
import { Link } from "react-router-dom";

const NavBar = () => {

        const navList = (
            <>
                <Link>Home</Link>
                <Link>Instructors</Link>
                <Link>Classes</Link>
                <Link>Dashboard</Link>
            </>
        );
    return (
        <div className="bg-black ">
            <div className=" w-full fixed z-10 shadow-sm ">
                <Container>
                    <div className="grid grid-cols-3 items-center h-16">
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost  ">
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
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navList}
                            </ul>
                        </div>
                        <Logo></Logo>
                        <div className="hidden lg:flex gap-5 justify-center">
                            {navList}
                        </div>
                        <ProfileLoginLogout></ProfileLoginLogout>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;
