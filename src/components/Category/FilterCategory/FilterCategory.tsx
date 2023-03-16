import styles from "./FilterCategory.module.scss";
import { ReactComponent as Listed } from "../../../assets/svg/listed.svg";
import { ReactComponent as Dots } from "../../../assets/svg/fourdotslist.svg";
import { useAppSelector } from "../../../redux/hooks";
import { selectAllProducts } from "../../../redux/products/productsSlice";
import { useEffect, useState } from "react";
import { product } from "../../../redux/products/types";

interface FilterProps {
  category: string;
  thisCategoryProducts: product[];
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterCategory = ({
  category,
  thisCategoryProducts,
  setOption,
}: FilterProps) => {
  const loading = useAppSelector((state) => state.products.isLoading);

  const [showMode, setShowMode] = useState<string>("dots");

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
          {loading
            ? `Calculating...`
            : `${thisCategoryProducts.length} Products Found `}{" "}
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
