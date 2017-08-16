import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './App';

const appState = new AppState();

render(
  <AppContainer>
    <App appState={appState} />
  </AppContainer>,
  document.getElementById('root')
);
