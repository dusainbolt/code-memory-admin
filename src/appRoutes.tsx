import { LoginPages } from './pages/Login';

interface IRoute {
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
    component: LoginPages,
    exact: true,
  },
];

export { publicRoute, privateRoutes };
