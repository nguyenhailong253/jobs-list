import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RootModule from './modules/root/RootModule';
import store from './modules/root/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <RootModule />
  </Provider>,
  rootElement,
);
