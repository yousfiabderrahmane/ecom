import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  emptyFavList,
  selectFavorites,
} from "../../redux/products/productsSlice";
import { Product } from "../Product/Product";
import styles from "./WishList.module.scss";
import { Pagination } from "../Pagination/Pagination";
import { ReactComponent as EmptyFav } from "../../assets/svg/emptyFav.svg";

const WishList = () => {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(selectFavorites);

  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const totalPages = favoriteList.length / cardsPerPage;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentFavList = favoriteList.slice(firstCardIndex, lastCardIndex);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentFavList.length === 0 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentFavList.length, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.listContainer}>
      {currentFavList.length > 0 ? (
        <div className={styles.list}>
          <div className={styles.header}>
            <button onClick={() => dispatch(emptyFavList())}>Clear</button>
          </div>
          <div className={styles.grid}>
            {currentFavList.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>
      ) : (
        <div className={styles.emptyFavContainer}>
          <EmptyFav className={styles.emptyIcon} />
          <h1>Currently Empty</h1>
        </div>
      )}
    </section>
  );
};

export default WishList;
