import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./SingleHome.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Error from "../Error/Error";

interface SingleHomeProps {
  src: string;
  category: undefined | string;
}

export const SingleHome = ({ src, category }: SingleHomeProps) => {
  const error = useAppSelector((state) => state.products.error);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        {/* <LazyLoadImage
          alt={"bghome"}
          effect="blur"
          src={src}
          placeholderSrc={src}
          wrapperClassName={styles.BackGroundImage}
        /> */}
        <img src={src} alt="adas" className={styles.BackGroundImage} />
      </div>

      {error ? (
        <Error error={error} />
      ) : (
        <div className={styles.content}>
          <div>
            <h1
              className={`${styles.homeTitle} animate__animated animate__fadeInDown`}
            >
              <Link to={"/"}>Home</Link> / <Link to={"/shop"}>products</Link> /{" "}
              {category}
            </h1>
            <p
              className={`${styles.subInfo} animate__animated animate__fadeInDown animate__delay-1s`}
            >
              You cannot inspect quality into the product; it is already there.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
