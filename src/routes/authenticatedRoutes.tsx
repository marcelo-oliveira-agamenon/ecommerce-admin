import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components';
import LoginService from '../services/login';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import InsertProduct from '../pages/InsertProduct';

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
      <Route path="/products/create" exact component={InsertProduct} />
    </>
  );
};

export default AuthenticatedRoutes;
