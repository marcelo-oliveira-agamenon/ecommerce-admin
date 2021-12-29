import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AiFillTag,
  AiOutlineOrderedList,
  AiOutlineShoppingCart,
  AiOutlineBank,
  AiOutlineLogout,
  AiOutlineHome,
} from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import Logo from '../../assets/images/logo.svg';

import './style.scss';

interface ISidemenu {
  isOpen: boolean;
  close: () => void;
}

const Sidebar: React.FC<ISidemenu> = ({ isOpen, close }) => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    window.location.href = '/';
  }, []);

  const handleChangeRoute = useCallback((route: string) => {
    history.push(route);
    close();
  }, []);

  return (
    <>
      {isOpen ? (
        <>
          <div id="background-shadow" onClick={close} onKeyDown={close} role="none" />

          <div id="sidebar">
            <img src={Logo} alt="grab and cash" className="logo" />

            <div
              aria-hidden="true"
              className="icon-link"
              onClick={() => handleChangeRoute('dashboard')}
            >
              <AiOutlineHome size={28} />

              <Link to="/dashboard">Home</Link>
            </div>

            <div
              aria-hidden="true"
              className="icon-link"
              onClick={() => handleChangeRoute('products')}
            >
              <AiFillTag size={28} />

              <Link to="/products">Produtos</Link>
            </div>

            <div className="icon-link">
              <AiOutlineShoppingCart size={28} />

              <Link to="/orders">pedidos</Link>
            </div>

            <div className="icon-link">
              <AiOutlineOrderedList size={28} />

              <Link to="/categories">categorias</Link>
            </div>

            <div className="icon-link">
              <AiOutlineBank size={28} />

              <Link to="/payments">pagamentos</Link>
            </div>

            <div className="icon-link">
              <AiOutlineOrderedList size={28} />

              <Link to="/coupons">cupons</Link>
            </div>

            <div className="icon-link">
              <BiUser size={28} />

              <Link to="/users">usuários</Link>
            </div>

            <div className="icon-link" onClick={handleLogout} role="none">
              <AiOutlineLogout size={28} />

              <span>sair</span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
