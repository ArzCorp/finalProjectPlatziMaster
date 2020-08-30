import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import '../style/styles.scss';

import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Layout from '../pages/Layout';
import Signup from '../pages/Signup';
import UserPerfil from '../pages/UserPerfil';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Notifications from '../pages/Notifications';

const UserLoged = ({ children }) => children({ isAuth: true });

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <UserLoged>
        {
          ({isAuth}) =>
          isAuth
          ?
          <Layout>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={UserPerfil} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          </Layout>
          : <Route>
            <Route exact path="/feed" component={Login} />
            <Route exact path="/profile" component={Login} />
            <Route exact path="/notifications" component={Login} />
          </Route>
        }
      </UserLoged>
    </Switch>
  </HashRouter>
);

export default App;
