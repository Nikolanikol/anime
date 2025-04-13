import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`pagination-button bg-red-500 w-8 h-8 rounded-2xl cursor-pointer ${
            i === currentPage ? 'transform -scale-50 transition-all' : ''
          }`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="pagination bg-amber-200 flex items-center justify-center p-4 w-full gap-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="bg-amber-200 p-2 rounded-lg"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-amber-200 p-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
