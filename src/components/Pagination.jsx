import React from "react";

const Pagination = ({ offset, setOffset }) => {
  const prev = () => {
    if (offset != 0) {
      setOffset(offset - 20);
    }
  };
  return (
    <div className="btn-group grid grid-cols-2 my-4">
      <button
        className="btn border-r border-r-white btn-secondary"
        onClick={prev}
      >
        Previous page
      </button>
      <button
        className="btn border-l border-l-white btn-secondary"
        onClick={() => setOffset(offset + 20)}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
