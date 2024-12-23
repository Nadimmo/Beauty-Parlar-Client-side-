import {
    createBrowserRouter,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";

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