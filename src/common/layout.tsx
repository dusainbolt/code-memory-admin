import * as React from 'react';
import { Layout } from 'antd';
import HeaderCommon from './header';
import { Switch, Route } from 'react-router-dom';
import { privateRoutes, publicRoute } from 'src/app-routes';
import { useAppSelector } from 'src/redux';

const { Content } = Layout;

interface ILayoutProps {
    error: any;
}

const LayoutCommon: React.FC<ILayoutProps> = props => {
    const { token } = useAppSelector(state => state.loginReducer);

    return (
        <Layout className="layout">
            <HeaderCommon />
            <Content>
                <Switch>
                    {token
                        ? privateRoutes.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)
                        : publicRoute.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index} />)}
                </Switch>
            </Content>
        </Layout>
    );
};

export default LayoutCommon;
