import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Reducers from './reducers/index';
import Context from './components/Context';

import App from './components/App';

const store = createStore(Reducers, applyMiddleware(reduxThunk));

if (module.hot) {
  module.hot.accept();
}

render(
  <Context.Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </Context.Provider>,
  document.getElementById('app'),
);
