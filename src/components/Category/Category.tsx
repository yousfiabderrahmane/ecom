import { FilterCategory } from "./FilterCategory/FilterCategory";
import styles from "./Category.module.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectAllProducts } from "../../redux/products/productsSlice";
import { CategoryContent } from "./CategoryContent/CategoryContent";
import { product } from "../../redux/products/types";
import Error from "../Error/Error";

interface CategoryProps {
  category: string;
}

export const Category = ({ category }: CategoryProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //state
  const products = useAppSelector(selectAllProducts);
  const [option, setOption] = useState("highest");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [showMode, setShowMode] = useState<string>("dots");

  const thisCategoryProducts = products.filter(
    (product) => product.category === currentCategory
  );

  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    if (category === "Women") {
      setCurrentCategory("women's clothing");
    } else if (category === "Men") {
      setCurrentCategory("men's clothing");
    } else if (category === "Jewelery") {
      setCurrentCategory("jewelery");
    } else {
      setCurrentCategory("electronics");
    }
  }, [category]);

  return (
    <>
      {!error && (
        <div className={styles.container}>
          <FilterCategory
            setShowMode={setShowMode}
            showMode={showMode}
            thisCategoryProducts={thisCategoryProducts}
            category={category}
            setOption={setOption}
          />
          <CategoryContent
            showMode={showMode}
            option={option}
            category={currentCategory}
          />
        </div>
      )}
    </>
  );
};
