import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

// Main Function of Route
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/login", element: <LoginPage /> },
            {
                path: "users",
                element: <UserPage />,
                children: [{ path: ":id", element: <UserDetailPage /> }],
            },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
]);

export default router;
