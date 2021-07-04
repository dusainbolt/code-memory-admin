import * as React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import apolloClient from './graphql/apollo.client';
import { privateRoutes, publicRoute } from './app-routes';
import LayoutCommon from './common/layout';

const history = createBrowserHistory();

class App extends React.Component<{}, {}> {
    render() {
        console.log(`process.env.GRAPH_URI : ${process.env.REACT_APP_GRAPH_URI}`);
        return (
            <React.Fragment>
                <ApolloProvider client={apolloClient}>
                    <BrowserRouter>
                        <Router history={history}>
                            <Switch>
                                <Route path={[...publicRoute, ...privateRoutes].map(item => item.path)} component={LayoutCommon} />
                            </Switch>
                        </Router>
                    </BrowserRouter>
                </ApolloProvider>
            </React.Fragment>
        );
    }
}

export default App;
