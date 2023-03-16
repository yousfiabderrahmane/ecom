import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getProductsRequested,
  selectFavorites,
  selectFilter,
} from "../../redux/products/productsSlice";
import { Filter } from "../Filter/Filter";
import { Product } from "../Product/Product";
import styles from "./ShopList.module.scss";
import { Loading } from "../LoadingGif/Loading";
import { Pagination } from "../Pagination/Pagination";

export const ShopList = () => {
  //app state
  const favorites = useAppSelector(selectFavorites);
  const products = useAppSelector((state) => state.products.products);
  const [thisCategoryProducts, setThisCategoryProducts] = useState(products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const error = useAppSelector((state) => state.products.error);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  //pagination state

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentProductsInitial = products.slice(firstCardIndex, lastCardIndex);

  const currentProducts = thisCategoryProducts.slice(
    firstCardIndex,
    lastCardIndex
  );

  const totalPages = Math.ceil(thisCategoryProducts.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  //filtering functions
  const jewelery = products.filter(
    (product) => product.category === "jewelery"
  );
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  const men = products.filter(
    (product) => product.category === "men's clothing"
  );
  const women = products.filter(
    (product) => product.category === "women's clothing"
  );

  useEffect(() => {
    if (filter === "all") {
      setThisCategoryProducts(products);
    } else if (filter === "jewelery") {
      setThisCategoryProducts(jewelery);
    } else if (filter === "electronics") {
      setThisCategoryProducts(electronics);
    } else if (filter === "men's clothing") {
      setThisCategoryProducts(men);
    } else {
      setThisCategoryProducts(women);
    }
  }, [filter, favorites]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(getProductsRequested());
    }
  }, []);

  return (
    <>
      <section className={styles.shopListContainer}>
        <div className={styles.shopList}>
          <Filter />
          {isLoading && <Loading />}
          {error && (
            <h3 className={styles.loading}>We've got a problem chief !</h3>
          )}

          {!isLoading && (
            <>
              {products.length > 0 && (
                <div
                  className={`${styles.productsGridContainer} animate__animated animate__fadeIn`}
                >
                  {filter === "all" &&
                    currentProductsInitial.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                  {filter !== "all" &&
                    currentProducts.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                </div>
              )}
              <Pagination
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                currentPage={currentPage}
                totalPages={
                  filter === "all" ? products.length / cardsPerPage : totalPages
                }
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};
