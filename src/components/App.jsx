import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GridExample from './GridExample';
import Signup from '../pages/Signup';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GridExample} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default App;
