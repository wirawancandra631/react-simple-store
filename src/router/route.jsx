import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import DetailProductPage from "../pages/DetailProductPage";
import CartProductPage from "../pages/CartProductPage";
import ErrorHandling from "../pages/ErrorHandling";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorHandling/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/product",
                element:<ProductPage/>
            },
            {
                path:"/product/detail/:id",
                element:<DetailProductPage/>,
            },
            {
                path:"/cart-product",
                element:<CartProductPage/>
            }
        ]
    }
]);



export default router;