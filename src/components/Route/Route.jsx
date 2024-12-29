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
import AdminRoute from "../PrivateRoute/AdminRoute";
import RequestUser from "../pages/Dashboard/RequestUser/RequestUser";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

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
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            //admin dashboard
            {
                path:'orderList',
                element: <AdminRoute>  <OrderList></OrderList></AdminRoute>
            },
            {
                path:'manage',
                element: <AdminRoute><ManageService></ManageService></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'update/:id',
                element: <AdminRoute><UpdateService></UpdateService></AdminRoute>,
                loader: ({params})=>fetch(`https://jerin-server-side.vercel.app/services/${params.id}`)
            },
            {
                path:'addService',
                element: <AdminRoute><AddService></AddService></AdminRoute>
            },
            {
                path: 'contact',
                element: <RequestUser></RequestUser>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ],
    },
]);
export default Route