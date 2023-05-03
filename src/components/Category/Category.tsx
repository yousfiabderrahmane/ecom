import { FilterCategory } from "./FilterCategory/FilterCategory";
import styles from "./Category.module.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectAllProducts } from "../../redux/products/productsSlice";
import { CategoryContent } from "./CategoryContent/CategoryContent";

interface CategoryProps {
  category: string;
}

export const Category = ({ category }: CategoryProps) => {
  //state
  const [option, setOption] = useState("highest");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [showMode, setShowMode] = useState<string>("dots");
  const error = useAppSelector((state) => state.products.error);

  const products = useAppSelector(selectAllProducts);
  const thisCategoryProducts = products.filter(
    (product) => product.category === currentCategory
  );

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
  //scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!error && (
        <div className={styles.container}>
          <FilterCategory
            setShowMode={setShowMode}
            showMode={showMode}
            totalProducts={thisCategoryProducts.length}
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
