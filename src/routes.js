import React from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import availableRoutes from './config';
import { AppRoute } from './components';
import App from './components/App/App';

const routes = (
  <React.Suspense fallback="loading">
    <App>
      <ConnectedRouter history={history}>
        <Switch>
          {
            availableRoutes.map(({ path, component, layout, exact, privateRoute }) => (
              <AppRoute key={path} sensitive={false} path={path} component={component} layout={layout} exact={exact} privateRoute={privateRoute} />
            ))
          }
        </Switch>
      </ConnectedRouter>
    </App>
  </React.Suspense>
);

export default routes;
