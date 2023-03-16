import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getProductsRequested,
  selectAllProducts,
  selectFavorites,
} from "../../../redux/products/productsSlice";
import { product } from "../../../redux/products/types";
import { Product } from "../../Product/Product";
import styles from "./CategoryContent.module.scss";
import { Loading } from "../../LoadingGif/Loading";

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

  const favoriteList = useAppSelector(selectFavorites);

  const [sortedArr, setSortedArr] = useState<product[]>(thisProducts);

  const handleHighest = useCallback(() => {
    setSortedArr(thisProducts.sort((a, b) => b.price - a.price));
  }, [thisProducts]);
  const handleLowest = useCallback(() => {
    setSortedArr(thisProducts.sort((a, b) => a.price - b.price));
  }, [thisProducts]);

  const handleName = useCallback(() => {
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
  }, [thisProducts]);

  const handleNameRevert = useCallback(() => {
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
  }, [thisProducts]);

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
  }, [
    option,
    category,
    favoriteList,
    handleHighest,
    handleLowest,
    handleName,
    handleNameRevert,
  ]);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(getProductsRequested());
    }
  }, [dispatch, products.length]);

  return (
    <>
      {/* {isLoading && <h1 className={styles.loading}>Loading ...</h1>} */}
      {isLoading && <Loading />}
      <section className={styles.contentContainer}>
        {!isLoading && sortedArr.length > 0
          ? sortedArr.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : thisProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </section>
    </>
  );
};
