import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppStateProvider } from './state/app-state';

import App from './App';

ReactDOM.render(
  <AppStateProvider>
    <Router>
      <App />
    </Router>
  </AppStateProvider>,
  document.getElementById('root')
);
