import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components';
import LoginService from '../services/login';

import Dashboard from '../pages/Dashboard/index';
import Products from '../pages/Products/index';

const AuthenticatedRoutes: React.FC = () => {
  useEffect(() => {
    setInterval(async () => {
      await LoginService.refreshToken();
    }, 3e6);
  }, []);

  return (
    <>
      <Header />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/products" exact component={Products} />
    </>
  );
};

export default AuthenticatedRoutes;
