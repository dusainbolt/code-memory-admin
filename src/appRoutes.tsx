// import { LoginPages } from './pages/Login';
import { AddBlogPage } from './pages/Blog/AddBlog';
import { TagListPage } from './pages/Tag/List';
import { DashBoardPage } from './pages/DashBoard';
import { LoginPages } from './pages/LoginPage';
import { ExperienceList } from './pages/Profile/ExperienceList';
import { CompanyList } from './pages/Profile/CompanyList';

export const ROUTE = {
  INDEX: '/',
  LOGIN: '/login',
  DASHBOARD_BLOG: '/dashboard',
  BLOG_ADD: '/blog/add',
  BLOG_LIST: '/blog',
  TAG_LIST: '/tag',
  PROFILE: '/profile',
  PROFILE_EXPERIENCE_LIST: '/experience-list',
  PROFILE_COMPANY_LIST: '/company-list',
};

export const RouteLayoutAdmin = [ROUTE.DASHBOARD_BLOG, ROUTE.BLOG_ADD, ROUTE.BLOG_LIST, ROUTE.TAG_LIST,ROUTE.PROFILE_COMPANY_LIST, ROUTE.PROFILE_EXPERIENCE_LIST];
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
    name: 'ExperienceList',
    path: ROUTE.PROFILE_EXPERIENCE_LIST,
    component: ExperienceList,
    exact: true,
  },
  {
    name: 'CompanyList',
    path: ROUTE.PROFILE_COMPANY_LIST,
    component: CompanyList,
    exact: true,
  }
];

export { publicRoute, privateRoutes };
