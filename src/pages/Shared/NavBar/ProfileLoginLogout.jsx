
const ProfileLoginLogout = () => {

    // const { user, logOut } = useContext(AuthContext);
    //     const handleLogOut = () => {
    //         logOut()
    //             .then(() => {})
    //             .catch((error) => console.log(error));
    //     };
    return (
        <div className="flex items-center gap-6">
            {/* {user ? (
                <div
                    className="tooltip tooltip-bottom "
                    data-tip={user?.displayName}>
                    {" "}
                    <div className="avatar">
                        <div className="w-16 mask mask-hexagon ">
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
                    onClick={handelLogout}
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
            )} */}
        </div>
    );
};

export default ProfileLoginLogout;