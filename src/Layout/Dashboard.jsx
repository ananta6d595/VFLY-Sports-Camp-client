import { Outlet } from "react-router-dom";
import DashBoardMenu from "../components/DashBoard/DashBoardMenu";

const Dashboard = () => {
    return (
        <>
            <DashBoardMenu>
                <Outlet></Outlet>
            </DashBoardMenu>
        </>
    );
};

export default Dashboard;
