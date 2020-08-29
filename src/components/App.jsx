import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import '../style/styles.scss';


import Signup from '../pages/Signup';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Login from '../pages/Login';
import UserPerfil from '../pages/UserPerfil';
import Feed from '../pages/Feed';
import Notifications from '../pages/Notifications';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={UserPerfil} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/feed" component={Feed} />
    </Switch>
  </HashRouter>
);

export default App;
