import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login/index';
import AuthRoutes from './authenticatedRoutes';

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <AuthRoutes />
    </Switch>
  </BrowserRouter>
);

export default routes;
