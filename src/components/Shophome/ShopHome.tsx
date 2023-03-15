import React from "react";
import styles from "./ShopHome.module.scss";
import shopBg from "../../assets/images/shopBg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ShopHome = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <LazyLoadImage
          wrapperClassName={styles.backgroundImg}
          src={shopBg}
          alt="background"
          placeholderSrc={shopBg}
          effect="blur"
        />
        {/* <img
          loading="lazy"
          className={styles.backgroundImg}
          src={shopBg}
          alt="background"
        /> */}
      </div>

      <div className={styles.content}>
        <div>
          <h1
            className={`${styles.homeTitle} animate__animated animate__fadeInDown`}
          >
            Our Shop
          </h1>
          <p
            className={`${styles.subInfo} animate__animated animate__fadeInDown animate__delay-1s`}
          >
            When the product is right, you don’t have to be a great Marketer.
          </p>
        </div>
      </div>
    </section>
  );
};
