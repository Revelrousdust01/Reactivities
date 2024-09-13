import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import App from "../layout/App.tsx";
import HomePage from "../../Features/home/HomePage.tsx";
import ActivityDashboard from "../../Features/Activities/dashboards/ActivityDashboard.tsx";
import ActivityForm from "../../Features/Activities/form/ActivityForm.tsx";
import ActivityDetails from "../../Features/Activities/details/ActivityDetails.tsx";
import TestErrors from "../../Features/errors/TestError.tsx";
import NotFound from "../../Features/errors/NotFound.tsx";
import ServerError from "../../Features/errors/ServerError.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key={'create'}/>},
            {path: 'manage/:id', element: <ActivityForm key={'manage'}/>},
            {path: 'errors', element: <TestErrors/>},
            {path: 'not-found', element: <NotFound/>},
            {path: 'server-error', element: <ServerError/>},
            {path: '*', element: <Navigate replace to={'/not-found'}/>}
        ]
    }
]

export const router = createBrowserRouter(routes)