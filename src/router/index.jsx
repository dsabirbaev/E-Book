

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import Nasr from "../pages/Nasr";
import Nazm from "../pages/Nazm";
import Maqolalar from "../pages/Maqolalar";
import Forum from "../pages/Forum";

import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/nasr",
                element: <Nasr/>
            },
            {
                path: "/nazm",
                element: <Nazm/>
            },
            {
                path: "/maqolalar",
                element: <Maqolalar/>
            },
            {
                path: "/forum",
                element: <Forum/>
            }
        ]
    }
]);

export default router;