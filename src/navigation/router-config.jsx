import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from './not-found';

import { LOGIN, HOME } from './router-paths';

const UserRoute = lazy(() => import('./user-route'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

const RouterConfig = () => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />
    <UserRoute exact path={HOME} component={Home} />
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default RouterConfig;
