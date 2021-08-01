import { DashboardPages } from './pages/DashBoard';
import { LoginPages } from './pages/Login';
import { AddBlogPage } from './pages/Blog/AddBlog';

export const ROUTE = {
  INDEX: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  BLOG_ADD: '/blog-add',
  BLOG_LIST: '/blog-list',
};

export const RouteLayoutAdmin = [ROUTE.DASHBOARD, ROUTE.BLOG_ADD];
export const RouteLayoutPublic = [ROUTE.INDEX, ROUTE.LOGIN];
export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
}

const publicRoute: IRoute[] = [
  {
    name: 'Login',
    path: ROUTE.INDEX,
    component: LoginPages,
    exact: true,
  },
  {
    name: 'Login',
    path: ROUTE.LOGIN,
    component: LoginPages,
    exact: true,
  },
];

const privateRoutes: IRoute[] = [
  {
    name: 'Dashboard',
    path: ROUTE.DASHBOARD,
    component: DashboardPages,
    exact: true,
  },
  {
    name: 'Dashboard',
    path: ROUTE.BLOG_ADD,
    component: AddBlogPage,
    exact: true,
  },
];

export { publicRoute, privateRoutes };
