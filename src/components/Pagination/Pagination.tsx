import styles from "./Pagination.module.scss";

interface PaginationProps {
  handleNext: () => void;
  handlePrevious: () => void;
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({
  handleNext,
  handlePrevious,
  totalPages,
  currentPage,
}: PaginationProps) => {
  return (
    <div className={styles.paginationContainer}>
      {currentPage > 1 && (
        <button className={styles.paginationBtn} onClick={handlePrevious}>
          Previous
        </button>
      )}
      <p>{currentPage}</p>
      {currentPage < totalPages && (
        <button className={styles.paginationBtn} onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};
