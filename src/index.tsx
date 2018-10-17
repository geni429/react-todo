import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Main } from './containers';
import Store from './modules';
import '@styled/global';

const root = document.getElementById('root') as HTMLElement;
render(
  <Provider store={Store}>
    <Main />
  </Provider>
, root);