import React, { useState, useEffect, useCallback } from 'react';
import { RiArrowDropLeftFill, RiArrowDropRightFill } from 'react-icons/ri';
import './style.scss';

interface IPagination {
  changePage: (limit: number, offset: number) => void;
  quantityOfElements: number;
}

const Pagination: React.FC<IPagination> = ({ quantityOfElements, changePage }) => {
  const [page, setPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const numberPerPages: number = 5;

  useEffect(() => {
    setNumberOfPages(Math.ceil(quantityOfElements / numberPerPages));
  }, [quantityOfElements]);

  const handleChangePage = useCallback((selectedPage: number) => {
    setPage(selectedPage);
    changePage(numberPerPages, Math.round(numberPerPages * (selectedPage - 1)));
  }, []);

  return (
    <div id="pagination">
      {page > 1 && <RiArrowDropLeftFill size={30} onClick={() => handleChangePage(page - 1)} />}

      {Array(numberOfPages)
        .fill('')
        .map((_, index) => (
          <button
            key={`key-${Math.random()}`}
            type="button"
            className={`pagination-pages ${page - 1 === index ? 'active' : ''}`}
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

      {page < numberOfPages && (
        <RiArrowDropRightFill size={30} onClick={() => handleChangePage(page + 1)} />
      )}
    </div>
  );
};

export default Pagination;
