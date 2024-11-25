import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../home/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updateCoffee",
                element: <UpdateCoffee />,
            },
        ],
    },
]);

export default router;
