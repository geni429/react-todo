import React from 'react';
import { render } from 'react-dom';
import { Main } from './containers';
import '@styled/global';

const root = document.getElementById('root') as HTMLElement;
render(<Main />, root);