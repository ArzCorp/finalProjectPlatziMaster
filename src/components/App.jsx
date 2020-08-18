import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GridExample from './GridExample';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ GridExample } />
    </Switch>
  </BrowserRouter>
);

export default App;
