import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";


import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Search from "../pages/Search";
import Results from "../pages/Results";
import FlightDetail from "../pages/FlightDetail";
import Checkout from "../pages/checkout/Checkout";
import Confirmation from "../pages/checkout/Confirmation";
import UserPanel from "../pages/user/UserPanel";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import PassengerInfo from "../pages/checkout/steps/PassengerInfo";
import Payment from "../pages/checkout/steps/Payment";
import Review from "../pages/checkout/steps/Review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "search",
                children: [
                    {
                        index: true,
                        element: <Search />,
                    },
                    {
                        path: "results",
                        element: <Results />,
                    },
                ],
            },
            {
                path: "flight/:id",
                element: <FlightDetail />,
            },
            {
                path: "checkout",
                element: <Checkout />,
                children: [
                    {
                        path: "passengers",
                        element: <PassengerInfo />,
                    },
                    {
                        path: "payment",
                        element: <Payment />,
                    },
                    {
                        path: "review",
                        element: <Review />,
                    },
                ],
            },
            {
                path: "confirmation",
                element: <Confirmation />,
            },
            {
                path: "user",
                element: <UserPanel />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;