import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Error404 from "../views/Error";
import PageProductDetail from "../views/Detail";
import PageProductCategory from "../views/Category";
import LayOutPublic from "../layout/LayOutPublic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOutPublic />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:categoryId",
                element: <PageProductCategory />,
            },
            {
                path: "/product/:productId",
                element: <PageProductDetail />,
            },
        ],
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes