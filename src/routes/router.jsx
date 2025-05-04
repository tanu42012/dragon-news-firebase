import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";

const router=createBrowserRouter(
    [
        {
            path:'/',
            element :<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    hydrateFallbackElement:<Loading></Loading>,
                    loader:()=>fetch("/news.json")



                }
            ]
        },
        {
            path:'/auth',
            element :<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                },

            ]

        },
        {
            path:'/news-details/:id',
            element :<PrivateRoute>
                <NewsDetails></NewsDetails></PrivateRoute>,
                 hydrateFallbackElement:<Loading></Loading>,
            loader:()=>fetch("/news.json")

        },
        {
            path:'/*',
            element :<h2>Error404</h2>

        },
    ]
)
export default router;