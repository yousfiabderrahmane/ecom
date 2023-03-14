import styles from "./Filter.module.scss";
import { ReactComponent as DownArr } from "../../assets/svg/arrow-down.svg";
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
      {filters.map((filter) => (
        <button
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