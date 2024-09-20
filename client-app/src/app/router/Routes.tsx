import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import App from "../layout/App.tsx";
import HomePage from "../../Features/home/HomePage.tsx";
import ActivityDashboard from "../../Features/Activities/dashboards/ActivityDashboard.tsx";
import ActivityForm from "../../Features/Activities/form/ActivityForm.tsx";
import ActivityDetails from "../../Features/Activities/details/ActivityDetails.tsx";
import TestErrors from "../../Features/errors/TestError.tsx";
import NotFound from "../../Features/errors/NotFound.tsx";
import ServerError from "../../Features/errors/ServerError.tsx";
import LoginForm from "../../Features/users/LoginForm.tsx";
import ProfilePage from "../../Features/profiles/ProfilePage.tsx";
import RequireAuth from "./RequireAuth.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children:[
                    {path: '', element: <HomePage />},
                    {path: 'activities', element: <ActivityDashboard />},
                    {path: 'activities/:id', element: <ActivityDetails />},
                    {path: 'createActivity', element: <ActivityForm key={'create'}/>},
                    {path: 'manage/:id', element: <ActivityForm key={'manage'}/>},
                    {path: 'profiles/:username', element: <ProfilePage />},
                    {path: 'login', element: <LoginForm/>},
                    {path: 'errors', element: <TestErrors/>},
            ]},
            {path: 'not-found', element: <NotFound/>},
            {path: 'server-error', element: <ServerError/>},
            {path: '*', element: <Navigate replace to={'/not-found'}/>}
        ]
    }
]

export const router = createBrowserRouter(routes)