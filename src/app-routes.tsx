import * as React from 'react';
import { LoginPages } from './pages/login';

const publicRoute = [
    {
        name: 'Login',
        path: '/login',
        component: LoginPages,
        exact: true,
    },
];

const privateRoutes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: LoginPages,
        exact: true,
    },
];

export { publicRoute, privateRoutes };
