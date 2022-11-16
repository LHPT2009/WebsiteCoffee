import React, {useState} from 'react';

import './table.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currPage, setCurrPage] = useState(1)
  const selectPage = page => {
    setCurrPage(page);
  }
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='table__pagination'>
        <div className="font-googleSansBold mx-5">Trang</div>
        {pageNumbers.map(number => (
          <li key={number} className='table__pagination-item'>
            <a onClick={() => {
              selectPage(number)
              paginate(number)
              }} 
              className={`table__pagination-item ${currPage === number ? 'active' : ''}`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;