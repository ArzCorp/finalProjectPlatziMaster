import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GridExample from './GridExample';
import Signup from '../pages/Signup';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Login from '../pages/Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GridExample} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
