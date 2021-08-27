import React, { useState } from 'react';

import './style.scss';
import { DefaultInput, DefaultButton } from '../../components';
import LogoAdmin from '../../assets/images/logo.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div id="login">
      <div className="logo-cash">
        <img src={LogoAdmin} alt="cash and grab" />
      </div>

      <div className="login-container">
        <h1>Plataforma Grab and cash</h1>

        <DefaultInput
          label="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <DefaultInput
          label="senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <DefaultButton typeButton="primary">entrar</DefaultButton>
      </div>
    </div>
  );
};

export default Login;
