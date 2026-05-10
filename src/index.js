import "./setupEnv";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from "./App";
import '@rumpushub/common-react/dist/index.css';
import {
    ErrorPage,
    Logout,
    PersonalPageEditor,
    PersonalProfilePage,
    UserProfilePage
} from '@rumpushub/common-react';

import AdminDashboard from './dashboards/admin_dashboard';
import LandingPageBody from './rumpus/landing';
import BugReportForm from "./rumpus/bug_report_form";
import UserHomeRedirect from "./rumpus/user/user-home-redirect";
import RumpusUserLandingPage from "./rumpus/user/rumpus-user-landing-page";

// import Leaderboard from "./buildshift/notion/leaderboard";
// import NotionTasks from "./buildshift/notion/notion_tasks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'error',
                element: <h1>Something went wrong!</h1>,
            },

            {
                index: true,
                element: <UserHomeRedirect />,
                errorElement: <ErrorPage />
            },
            {
                path: "home",
                element: <RumpusUserLandingPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "user/profile",
                element: <UserProfilePage />,
                errorElement: <ErrorPage />
            },

            // {
            //     index: true, // default child for "/"
            //     element: <LandingPageBody />,
            //     // loader: landingLoader,
            //     errorElement: <ErrorPage />
            // },
            {
                path: 'admin',
                element: <AdminDashboard />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'bug_report',
                element: <BugReportForm />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'logout',
                element: <Logout />,
            },
            {
                path: 'deleteUser/:username',
                // element: <Users />,
                action: async ({ request, params }) => {
                    // console.log(params);
                    // console.log(request.formData());
                    // console.log(request.url);
                    delete_user(params.username);
                    return request;
                },
                // loader: usersLoader,
                // errorElement: <ErrorPage />
            },
            {
                path: 'editor',
                element: <PersonalPageEditor />,
                errorElement: <ErrorPage />
            },
        ],
    },
    {
        path: 'profile/:id',
        element: <PersonalProfilePage />,
        // errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);