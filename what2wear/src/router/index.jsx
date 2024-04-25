import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { MyClosetsPage } from "../pages/MyClosetsPage/MyClosetsPage";
import { MyOutfitsPage } from "../pages/MyOutfitsPage/MyOutfitsPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { TrendingPage } from "../pages/TrendingPage/TrendingPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path:'/',
                element: <HomePage />
            },
            {
                path:'/login',
                element: <LoginPage />
            },
            {
                path:'/register',
                element: <RegisterPage />
            },
            {
                path:'/closets',
                element: <MyClosetsPage />
            },
            {
                path:'/outfits',
                element: <MyOutfitsPage />
            },
            {
                path:'/about',
                element: <AboutUsPage />
            },
            {
                path:'/trending',
                element: <TrendingPage/>
            },
        ]
    }
])