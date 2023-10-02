import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login");
    const noHeaderFooter1 = location.pathname.includes("signup");
    // console.log(location);
    return (
        <div>
            {noHeaderFooter || noHeaderFooter1 || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || noHeaderFooter1 || <Footer></Footer>}
        </div>
    );
};

export default Main;
