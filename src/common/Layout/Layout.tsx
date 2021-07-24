import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { useAppSelector } from '../../redux/rootStore';
import { privateRoutes, publicRoute } from '../../appRoutes';
import { LoginPages } from '../../pages/Login';

const { Content } = Layout;

interface ILayoutProps {
  error: any;
}

const LayoutCommon: React.FC<ILayoutProps> = props => {
  const { token } = useAppSelector(state => state.loginReducer);

  return (
    <Layout className="layout">
      {/* <HeaderCommon /> */}
      <Content>
        <Switch>
          <Route component={LoginPages} />
          {token
            ? privateRoutes.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)
            : publicRoute.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)}
        </Switch>
      </Content>
    </Layout>
  );
};

export default LayoutCommon;
