import styles from "./FilterCategory.module.scss";
import { ReactComponent as Listed } from "../../../assets/svg/listed.svg";
import { ReactComponent as Dots } from "../../../assets/svg/fourdotslist.svg";
import { useAppSelector } from "../../../redux/hooks";
import { product } from "../../../redux/products/types";

interface FilterProps {
  totalProducts: number;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  showMode: string;
  setShowMode: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterCategory = ({
  totalProducts,
  setOption,
  showMode,
  setShowMode,
}: FilterProps) => {
  const loading = useAppSelector((state) => state.products.isLoading);

  return (
    <section className={styles.filterContainer}>
      <div className={styles.left}>
        <div className={styles.iconsContainer}>
          <Dots
            onClick={() => setShowMode("dots")}
            className={`${styles.filterIcon} ${
              showMode === "dots" && styles.active
            }`}
          />
          <Listed
            onClick={() => setShowMode("list")}
            className={`${styles.filterIcon} ${
              showMode === "list" && styles.active
            }`}
          />
        </div>
        <p>
          {" "}
          {loading ? `Calculating...` : `${totalProducts} Products Found `}{" "}
        </p>
      </div>
      <hr />
      <div className={styles.right}>
        <label htmlFor="sort">Sort By</label>
        <select
          onChange={(e) => setOption(e.target.value)}
          name="sort"
          id="sort"
        >
          <option value="highest">Price (Highest)</option>
          <option value="lowest">Price (Lowest)</option>
          <option value="name">Name (A-Z)</option>
          <option value="nameRevert">Name (Z-A)</option>
        </select>
      </div>
    </section>
  );
};
