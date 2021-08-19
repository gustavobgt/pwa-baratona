import React, { Suspense, useEffect } from 'react';
import { Spinner } from 'reactstrap';

import {initializeFirebase} from './firebase'
import Router from './navigation/router-config';
import './App.css';

const App = () => {
  useEffect(()=>{
   initializeFirebase()
  },)
  return (
    <Suspense fallback={<Spinner type="grow" color="secondary" />}>
      <Router />
    </Suspense>
  );
};


export default App;
