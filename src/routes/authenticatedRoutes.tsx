import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components';

import Dashboard from '../pages/Dashboard/index';

const AuthenticatedRoutes: React.FC = () => (
  <>
    <Header />

    <Route path="/dashboard" exact component={Dashboard} />
  </>
);

export default AuthenticatedRoutes;
