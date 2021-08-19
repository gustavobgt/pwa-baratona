import React, { Suspense } from 'react';
import { Spinner } from 'reactstrap';

import Router from './navigation/router-config';
import './App.css';

const App = () => {
  return (
    <Suspense fallback={<Spinner type="grow" color="secondary" />}>
      <Router />
    </Suspense>
  );
};

export default App;
