import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const getPagination = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  if (current <= 3) return [1, 2, 3, 4, "...", total];

  if (current >= total - 2)
    return [1, "...", total - 3, total - 2, total - 1, total];

  return [1, "...", current - 1, current, current + 1, "...", total];
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const paginationNumbers = getPagination(currentPage, totalPages);

  return (
    <div className="pagination-wrap">
      <div className="pagination container">
        {/* PREV */}
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <FaArrowLeft />
        </button>

        {/* NUMBERS */}
        <div className="page-numbers">
          {paginationNumbers.map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="dots">
                ...
              </span>
            ) : (
              <button
                key={item}
                className={`page-number ${
                  currentPage === item ? "active" : ""
                }`}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* NEXT */}
        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
