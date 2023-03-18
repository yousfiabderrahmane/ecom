import styles from "./Filter.module.scss";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeFilter, selectFilter } from "../../redux/products/productsSlice";

const filters = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export const Filter = () => {
  const dispatch = useAppDispatch();

  const currentFilter = useAppSelector(selectFilter);

  const handleFilterChange = (filter: string) => {
    dispatch(changeFilter(filter));
  };
  return (
    <div className={styles.filterContainer}>
      <p>Category :</p>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`${styles.filterBtn} ${
            currentFilter === filter && styles.active
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
