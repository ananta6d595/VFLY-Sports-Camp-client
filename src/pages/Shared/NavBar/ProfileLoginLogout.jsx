
const ProfileLoginLogout = () => {

    // const { user, logOut } = useContext(AuthContext);
    //     const handleLogOut = () => {
    //         logOut()
    //             .then(() => {})
    //             .catch((error) => console.log(error));
    //     };
    return (
        <div>
            <div className="flex justify-end">User Profile</div>
            {/* {user ? (
                <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className="btn btn-ghost">
                        LogOut
                    </button>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )} */}
        </div>
    );
};

export default ProfileLoginLogout;