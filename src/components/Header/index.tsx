import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { User } from '../../models/user';

import './style.scss';

const Header: React.FC = () => {
  const user: User = JSON.parse(localStorage.getItem('grab-and-cash-user') as string);

  return (
    <div id="header-container">
      <BiMenu size={25} />

      <h1>
        Olá,
        {user ? user.Name : ' Usuário!'}
      </h1>
    </div>
  );
};

export default Header;
