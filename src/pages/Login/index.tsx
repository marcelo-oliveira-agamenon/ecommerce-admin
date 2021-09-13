import React, { useState } from 'react';
import LoginService from '../../services/login';

import './style.scss';
import { DefaultInput, DefaultButton } from '../../components';
import LogoAdmin from '../../assets/images/logo.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    LoginService.signUp(email, password);
  };

  return (
    <div id="login">
      <div className="logo-cash">
        <img src={LogoAdmin} alt="cash and grab" />
      </div>

      <div className="login-container">
        <h1>Plataforma Grab and cash</h1>

        <DefaultInput
          label="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <DefaultInput
          label="senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <DefaultButton typeButton="primary" onClick={handleLogin}>
          entrar
        </DefaultButton>
      </div>
    </div>
  );
};

export default Login;
