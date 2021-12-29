import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Sidebar } from '../index';
import { User } from '../../models/user';

import './style.scss';

const Header: React.FC = () => {
  const whiteSpace = ' ';
  const user: User = JSON.parse(localStorage.getItem('grab-and-cash-user') as string);
  const [sidemenuOpen, setSidemenuOpen] = useState<boolean>(false);

  return (
    <>
      <Sidebar isOpen={sidemenuOpen} close={() => setSidemenuOpen(false)} />

      <div id="header-container">
        <BiMenu size={25} onClick={() => setSidemenuOpen((value) => !value)} />

        <h1>
          Olá,
          {user ? whiteSpace.concat(user.Name) : 'Usuário!'}
        </h1>
      </div>
    </>
  );
};

export default Header;
