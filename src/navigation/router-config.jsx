import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from './NotFound';

import { LOGIN, HOME, CART } from './router-paths';

const UserRoute = lazy(() => import('./user-route'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));

const RouterConfig = () => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />

    <UserRoute exact path={HOME} component={Home} />
    <UserRoute exact path={CART} component={Cart} />

    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default RouterConfig;
