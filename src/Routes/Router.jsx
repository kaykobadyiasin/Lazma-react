import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/MainPages/Home/Home/Home";
import ProductSinglePage from "../Components/ProductSinglePage/ProductSinglePage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/productSingle/:_id',
                element: <ProductSinglePage />
            },
        ]
    },
]);

export default Router;