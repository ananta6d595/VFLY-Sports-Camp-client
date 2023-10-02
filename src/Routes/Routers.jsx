import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/DashBoard/MySelectedClasses";
import MyEnrolledClasses from "../pages/DashBoard/MyEnrolledClasses";
import AddClass from "../pages/DashBoard/AddClass";
import InstructorClasses from "../pages/DashBoard/InstructorClasses";
import ManageUsers from "../pages/DashBoard/ManageUsers";
import ManageClasses from "../pages/DashBoard/ManageClasses";
import FeedBack from "../pages/DashBoard/FeedBack";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import UpdateClass from "../pages/DashBoard/UpdateClass";
import PaymentPage from "../Payment/PaymentPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>,
            },
            {
                path: "/classes",
                element: <Classes></Classes>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //student dashboard
            {
                path: "selectedClass",
                element: <MySelectedClasses></MySelectedClasses>,
            },
            {
                path: "enrolledClass",
                element: <MyEnrolledClasses></MyEnrolledClasses>,
            },
            {
                path: "selectedClass/payment/:id",
                element: <PaymentPage></PaymentPage>,
            },

            //instructor dashboard
            {
                path: "addClass",
                element: <AddClass></AddClass>,
            },
            {
                path: "instructorClasses",
                element: <InstructorClasses></InstructorClasses>,
            },
            {
                path: "instructorClasses/updateClass/:id",
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_server}/instructor/class/${
                            params.id
                        }`
                    ),
            },

            //admin dashboard
            {
                path: "manageClass",
                element: (
                    <AdminRoute>
                        <ManageClasses></ManageClasses>
                    </AdminRoute>
                ),
            },
            {
                path: "manageUsers",
                element: (
                    <AdminRoute>
                        <ManageUsers></ManageUsers>,
                    </AdminRoute>
                ),
            },
            {
                path: "manageClass/feedback/:id",
                element: (
                    <AdminRoute>
                        <FeedBack></FeedBack>,
                    </AdminRoute>
                ),
            },
        ],
    },
]);
