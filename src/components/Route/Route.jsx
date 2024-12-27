import {
    createBrowserRouter,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import OurTeam from "../pages/OurTeam/OurTeam";
import Contact from "../pages/Contact/Contact";
import Dashboard from "./Dashboard";
import BookingList from "../pages/Dashboard/BookingList/BookingList";
import Review from "../pages/Dashboard/Review/Review";
import AddService from "../pages/Dashboard/AddService/AddService";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import ManageService from "../pages/Dashboard/ManageService/ManageService";
import UpdateService from "../pages/Dashboard/ManageService/UpdateService";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/ourTeam",
                element: <OurTeam></OurTeam>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            //user dashboard
            {
                path: 'bookingList',
                element: <BookingList></BookingList>,
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            //admin dashboard
            {
                path:'orderList',
                element: <OrderList></OrderList>
            },
            {
                path:'manage',
                element: <ManageService></ManageService>
            },
            {
                path: 'users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path:'update/:id',
                element: <UpdateService></UpdateService>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'addService',
                element: <AddService></AddService>
            }
        ],
    },
]);
export default Route