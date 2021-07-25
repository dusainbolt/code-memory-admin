import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';
import { useAppSelector } from '../../redux/rootStore';
import { IRoute, privateRoutes, publicRoute, RouteLayoutAdmin } from '../../appRoutes';
import { LoginPages } from '../../pages/Login';
import { HeaderAdmin } from './HeaderAdmin';

const { Content } = Layout;

// interface ILayoutCommon extends RouteChildrenProps {
//   path: string;
// }

interface ILayoutAuth {
  type: string;
  token: string;
}

const LayoutAuth: React.FC<ILayoutAuth> = ({ type, children, token }) => {
  return (
    <Layout className="layout">
      {/* Header container */}
      {RouteLayoutAdmin.includes(type) && token && <HeaderAdmin />}
      {/* Header container END */}
      <Content>{children}</Content>
    </Layout>
  );
};

const LayoutCommon: React.FC<RouteChildrenProps> = ({ history, location, match }) => {
  const { token } = useAppSelector(state => state.loginReducer);
  console.log('history', history);
  console.log('location', history);
  console.log('match', history);
  return (
    <LayoutAuth token={token} type={history.location.pathname}>
      <Switch>
        {token
          ? privateRoutes.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)
          : publicRoute.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)}
        <Route component={LoginPages} />
      </Switch>
    </LayoutAuth>
  );
};

export default LayoutCommon;
