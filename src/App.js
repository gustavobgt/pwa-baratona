import React, { Suspense } from 'react';

import Router from './navigation/router-config';
import './App.css';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
};

export default App;
