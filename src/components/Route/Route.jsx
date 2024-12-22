import {
    createBrowserRouter,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";
import About from "../pages/About/About";

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
        ],
    },
]);
export default Route