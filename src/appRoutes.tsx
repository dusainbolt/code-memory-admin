import { DashboardPages } from './pages/DashBoard';
import { LoginPages } from './pages/Login';

export const RouteLayoutAdmin = ['/dashboard'];
export const RouteLayoutPublic = ['/', '/login'];
export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
}

const publicRoute: IRoute[] = [
  {
    name: 'Login',
    path: '/',
    component: LoginPages,
    exact: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginPages,
    exact: true,
  },
];

const privateRoutes: IRoute[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardPages,
    exact: true,
  },
];

export { publicRoute, privateRoutes };
