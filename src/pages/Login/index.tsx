import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginService from '../../services/login';

import './style.scss';
import { DefaultInput, DefaultButton } from '../../components';
import LogoAdmin from '../../assets/images/logo.svg';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);

    LoginService.signUp(email, password)
      .then(() => {
        history.push('/dashboard');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('grab-and-cash-token') as string;

    if (token) {
      history.push('/dashboard');
    }
  }, []);

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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleLogin();
            }
          }}
        />

        <DefaultButton
          typeButton="primary"
          onClick={handleLogin}
          loading={loading}
          disabled={loading}
        >
          entrar
        </DefaultButton>
      </div>
    </div>
  );
};

export default Login;
