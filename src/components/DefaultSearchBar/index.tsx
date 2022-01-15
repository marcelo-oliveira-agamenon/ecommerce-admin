import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import './style.scss';

interface IDefaultSearchBar
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onSearch: (query: string) => void;
  onClose: () => void;
}

const DefaultSearchBar: React.FC<IDefaultSearchBar> = ({ onSearch, onClose, ...rest }) => {
  const [query, setQuery] = useState<string>('');
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const input = document.getElementById('input-search-bar');
    input?.focus();
  }, [searchBarOpen]);

  const handleCloseClick = () => {
    setQuery('');
    onClose();
  };

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch(query);
      }
    },
    [query],
  );

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
            onKeyDown={handleKeyDown}
          />

          {query.length ? <AiOutlineClose size={18} onClick={handleCloseClick} /> : null}
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
