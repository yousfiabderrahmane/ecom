import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getProductsRequested,
  selectAllProducts,
} from "../../../redux/products/productsSlice";
import { product } from "../../../redux/products/types";
import { Product } from "../../Product/Product";
import styles from "./CategoryContent.module.scss";

interface ContentTypeProps {
  option: string;
  category: string;
}

export const CategoryContent = ({ option, category }: ContentTypeProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.products.isLoading);
  const error = useAppSelector((state) => state.products.error);
  const products = useAppSelector(selectAllProducts);
  const thisProducts = products.filter(
    (product) => product.category === category
  );
  console.log(thisProducts);
  const [sortedArr, setSortedArr] = useState<product[]>(thisProducts);
  console.log(sortedArr);

  const handleHighest = () => {
    setSortedArr(thisProducts.sort((a, b) => b.price - a.price));
  };
  const handleLowest = () => {
    setSortedArr(thisProducts.sort((a, b) => a.price - b.price));
  };

  const handleName = () => {
    setSortedArr(
      thisProducts.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleNameRevert = () => {
    const newArr = thisProducts.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    setSortedArr(newArr.reverse());
  };

  useEffect(() => {
    if (option === "highest") {
      handleHighest();
    } else if (option === "lowest") {
      handleLowest();
    } else if (option === "name") {
      handleName();
    } else {
      handleNameRevert();
    }
  }, [option, category]);

  useEffect(() => {
    dispatch(getProductsRequested());
  }, [category, dispatch]);

  return (
    <>
      {!isLoading && <h1 className={styles.loading}>Loading ...</h1>}
      <section className={styles.contentContainer}>
        {isLoading && sortedArr.length > 0
          ? sortedArr.map((product) => <Product product={product} />)
          : thisProducts.map((product) => <Product product={product} />)}
      </section>
    </>
  );
};
