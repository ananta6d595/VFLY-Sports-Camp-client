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


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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

            //instructor dashboard
            {
                path: "addClass",
                element: <AddClass></AddClass>,
            },
            {
                path: "instructorClasses",
                element: <InstructorClasses></InstructorClasses>,
            },
            //admin dashboard
            {
                path: "manageClass",
                element: <ManageClasses></ManageClasses>,
            },
            {
                path: "manageUsers",
                element: <ManageUsers></ManageUsers>,
            },
            {
                path: "manageClass/feedback",
                element: <FeedBack></FeedBack>,
            },
        ],
    },
]);
