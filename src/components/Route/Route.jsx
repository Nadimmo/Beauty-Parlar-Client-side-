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
                path:"/ourTeam",
                element: <OurTeam></OurTeam>
            },
            {
                path:'/contact',
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
]);
export default Route