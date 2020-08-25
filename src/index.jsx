import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Reducers from './reducers/index';

import App from './components/App';

const store = createStore(Reducers, applyMiddleware(reduxThunk));

if (module.hot) {
  module.hot.accept();
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
