import styles from "./WishHome.module.scss";
import BackGroundImage from "../../assets/images/wishBg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const WishHome = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <img
          alt={"bghome"}
          // effect="blur"
          src={BackGroundImage}
          // placeholderSrc={BackGroundImage}
          // wrapperClassName={styles.BackGroundImage}
        />
      </div>

      <div className={styles.content}>
        <div>
          <h1
            className={`${styles.homeTitle} animate__animated animate__fadeInDown`}
          >
            Here is your wishlist
          </h1>
          <p
            className={`${styles.subInfo} animate__animated animate__fadeInDown animate__delay-1s`}
          >
            Terrible taste by the way
          </p>
        </div>
      </div>
    </section>
  );
};
