import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutUsPage, HomePage, LoginPage, MyClosetsPage, MyOutfitsPage, NotFoundPage, RegisterPage } from "../pages";

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

        ]
    }
])