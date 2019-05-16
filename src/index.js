import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './index.css';
import createStore, { sagaMiddleware } from './store';
import { Provider } from 'react-redux';
import { rootSaga } from './modules';

const store = createStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
