// import { LoginPages } from './pages/Login';
import { AddBlogPage } from './pages/Blog/AddBlog';
import { TagListPage } from './pages/Tag/List';
import { DashBoardPage } from './pages/DashBoard';
import { LoginPages } from './pages/LoginPage';
import { SeoPage } from './pages/Seo';
import { SeoHistory } from './pages/Seo/History';

export const ROUTE = {
  INDEX: '/',
  LOGIN: '/login',
  DASHBOARD_BLOG: '/dashboard',
  BLOG_ADD: '/blog/add',
  BLOG_LIST: '/blog',
  TAG_LIST: '/tag',
  SEO: '/seo',
  SEO_HISTORY: '/seo/history',
};

export const RouteLayoutAdmin = [ROUTE.DASHBOARD_BLOG, ROUTE.BLOG_ADD, ROUTE.BLOG_LIST, ROUTE.TAG_LIST, ROUTE.SEO, ROUTE.SEO_HISTORY];
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
    name: 'DashBoardBlog',
    path: ROUTE.DASHBOARD_BLOG,
    component: DashBoardPage,
    exact: true,
  },
  {
    name: 'BlogList',
    path: ROUTE.BLOG_LIST,
    component: AddBlogPage,
    exact: true,
  },
  {
    name: 'AddBlog',
    path: ROUTE.BLOG_ADD,
    component: AddBlogPage,
    exact: true,
  },
  {
    name: 'TagList',
    path: ROUTE.TAG_LIST,
    component: TagListPage,
    exact: true,
  },
  {
    name: 'SeoSetting',
    path: ROUTE.SEO,
    component: SeoPage,
    exact: true,
  },
  {
    name: 'SeoHistory',
    path: ROUTE.SEO_HISTORY,
    component: SeoHistory,
    exact: true,
  },
];

export { publicRoute, privateRoutes };
