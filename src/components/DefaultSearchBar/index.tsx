import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import './style.scss';

interface IDefaultSearchBar
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onSearch: (query: string) => void;
}

const DefaultSearchBar: React.FC<IDefaultSearchBar> = ({ onSearch, ...rest }) => {
  const [query, setQuery] = useState<string>('');
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const input = document.getElementById('input-search-bar');
    input?.focus();
  }, [searchBarOpen]);

  return (
    <div id="search-bar" style={{ width: searchBarOpen ? '320px' : '40px' }}>
      {searchBarOpen ? (
        <>
          <AiOutlineSearch size={25} onClick={() => onSearch(query)} />

          <input
            id="input-search-bar"
            ref={inputRef}
            type="text"
            {...rest}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          {query.length ? <AiOutlineClose size={18} onClick={() => setQuery('')} /> : null}
        </>
      ) : (
        <>
          <AiOutlineSearch size={25} onClick={() => setSearchBarOpen(true)} />
        </>
      )}
    </div>
  );
};

export default DefaultSearchBar;
