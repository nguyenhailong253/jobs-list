import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoModule from './modules/todos/TodoModule';
import rootReducer from './modules/todos/reducers';
// import store from './modules/root/store';
// import RootModule from './modules/root/RootModule';

const rootElement = document.getElementById('root');

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <RootModule /> */}
    <TodoModule />
  </Provider>,
  rootElement,
);
