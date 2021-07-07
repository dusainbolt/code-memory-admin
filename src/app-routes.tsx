import * as React from 'react';
import { LoginPages } from './pages/login';
import { DashBoard } from './pages/dashboard';


const publicRoute = [
    {
        name: 'Login',
        path: '/login',
        component: LoginPages,
        exact: true,
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: DashBoard,
        exact: true,
    },
];

const privateRoutes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: DashBoard,
        exact: true,
    },
];

export { publicRoute, privateRoutes };
