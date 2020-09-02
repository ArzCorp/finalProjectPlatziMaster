import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import '../style/styles.scss';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Layout from '../pages/Layout';
import Signup from '../pages/Signup';
import UserPerfil from '../pages/UserPerfil';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Notifications from '../pages/Notifications';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <PublicRoute
        exact
        path="/"
        component={Login}
      />
      <PublicRoute
        path="/login"
        component={Login}
      />
      <PublicRoute
        path="/signup"
        component={Signup}
      />
      <PublicRoute
        path="/privacy-policy"
        component={PrivacyPolicy}
      />
      <Layout>
        <PrivateRoute
          path="/feed"
          component={Feed}
        />
        <PrivateRoute
          path="/profile"
          component={UserPerfil}
        />
        <PrivateRoute
          path="/notifications"
          component={Notifications}
        />
      </Layout>
    </Switch>
  </HashRouter>
);

export default App;
