import { Outlet } from "react-router-dom";
import SideBar from "../components/DashBoard/SideBar";

const Dashboard = () => {
    return (
        <div>
            <SideBar>
                <Outlet></Outlet>
            </SideBar>
        </div>
    );
};

export default Dashboard;