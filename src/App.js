import React, { Suspense, useEffect } from 'react';

import {initializeFirebase} from './firebase'
import Router from './navigation/router-config';
import './App.css';

const App = () => {
  useEffect(()=>{
   initializeFirebase()
  },)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
};


export default App;
