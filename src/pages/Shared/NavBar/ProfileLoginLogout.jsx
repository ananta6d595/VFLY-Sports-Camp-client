import { useContext } from "react";
import {  Link } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProvider";

const ProfileLoginLogout = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };
    return (
        <div className="flex w-full justify-end items-center pe-6">
            {user ? (
                <div
                    className="tooltip tooltip-bottom "
                    data-tip={user?.displayName}>
                    {" "}
                    <div className="avatar">
                        <div className="w-14 mask mask-hexagon ">
                            <img src={user?.photoURL} className="" />
                            <img src="/src/assets/userDefault.jpg" />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {user ? (
                // <Link to="/">
                <button
                    onClick={handleLogOut}
                    className="btn inline-flex items-center rounded-md bg-cyan-700 hover:bg-cyan-500 border-0 text-white">
                    Logout
                </button>
            ) : (
                // </Link>
                <Link to="/login">
                    <button className="btn inline-flex items-center rounded-md bg-cyan-700 hover:bg-cyan-500 border-0 text-white">
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
};

export default ProfileLoginLogout;
