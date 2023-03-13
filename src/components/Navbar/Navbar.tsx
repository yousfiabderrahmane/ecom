import React, { useEffect, useState } from "react";
import { ReactComponent as NavStar } from "../../assets/svg/nav-star.svg";
import { ReactComponent as NavCart } from "../../assets/svg/nav-cart.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../assets/svg/arrow-up.svg";
import styles from "./Navbar.module.scss";

const productsList = ["Men", "Jewelery", "Electronics", "Women"];

export const Navbar = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean | undefined>(false);

  const changeNav = () => {
    window.scrollY >= 5 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav
      className={
        scroll ? `${styles.navbar} ${styles.navbarScroll}` : styles.navbar
      }
    >
      <div className={styles.iconContainer}>
        <NavStar fill="white" className={styles.icon} />
        <span className={styles.overlayInfo}>3</span>
      </div>
      <div className={styles.middle}>
        <button className={styles.navButton}>HOME</button>
        <div
          // onMouseLeave={() => setShowList(false)}
          className={styles.productsButtonContainer}
        >
          <button onClick={() => setShowList(!showList)}>
            {" "}
            <div className={styles.productsButton}>
              PRODUCTS{" "}
              {showList ? (
                <UpArrow
                  fill="red"
                  stroke="green"
                  className={styles.dropIcon}
                />
              ) : (
                <DownArrow className={styles.dropIcon} />
              )}
            </div>
          </button>

          {showList && (
            <div className={styles.dropDown}>
              {" "}
              {productsList.map((product) => (
                <button className={styles.dropdownBtn} key={product}>
                  {product}
                </button>
              ))}
            </div>
          )}
        </div>
        <h1 className={styles.logo}>AyShop</h1>
        <button className={styles.navButton}>SPECIALS</button>
      </div>
      <div className={styles.iconContainer}>
        <NavCart fill="white" className={styles.icon} />
        <span className={styles.overlayInfo}>2</span>
      </div>
    </nav>
  );
};
