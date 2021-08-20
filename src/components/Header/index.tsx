import React from 'react';
import { BiMenu } from 'react-icons/bi';

import './style.scss';

const Header: React.FC = () => (
  <div id="header-container">
    <BiMenu size={25} />

    <h1>Olá, usuário</h1>
  </div>
);

export default Header;
