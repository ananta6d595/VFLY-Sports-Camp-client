import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <img
                src="https://cdn.dribbble.com/users/46355/screenshots/16843933/media/4cb734dfc26ce2030c375ebf004e5e9c.png"
                alt=""
                className="mx-auto h-52 md:h-[600px]"
            />

            <p className="mb-6">page not found</p>

            <Link to="/">
                <button className="btn"> Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
