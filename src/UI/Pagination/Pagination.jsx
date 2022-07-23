import React from "react";
import cl from "./Pagination.module.css";

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total page numbers for rendering
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="page-container">
      <nav>
        <ul className={cl.pagination}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)} // a callback to change the current page
              className={
                currentPage === number ? cl.current_page_item : cl.pageItem
              }
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
