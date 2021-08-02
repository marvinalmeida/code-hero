import React from "react";
import './Pagination.css'

const Pagination = ({ limit, total, offset, setOffset }) => {

  const pages = Array.from({ length: total / limit })
    .map((_, i) => i + 1)
    .slice(0, 5);

  return (
    <div className="pagination">
      <ul>
        {pages.map((page) => {
          return (
            <button key={page} onClick={() => setOffset(page * limit)}>
              {page}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
