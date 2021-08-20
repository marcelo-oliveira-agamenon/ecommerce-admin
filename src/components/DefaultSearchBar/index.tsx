import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './style.scss';

interface IDefaultSearchBar
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const DefaultSearchBar: React.FC<IDefaultSearchBar> = ({ ...rest }) => (
  <div id="search-bar">
    <AiOutlineSearch size={25} />

    <input type="text" {...rest} />
  </div>
);

export default DefaultSearchBar;
