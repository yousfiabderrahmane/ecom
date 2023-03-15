import { LazyLoadImage } from "react-lazy-load-image-component";
import BackGroundImage from "../../assets/images/home-background.jpg";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <LazyLoadImage
          alt={"bghome"}
          effect="blur"
          src={BackGroundImage}
          placeholderSrc={BackGroundImage}
          wrapperClassName={styles.BackGroundImage}
        />
        {/* <img
          loading="lazy"
          className={styles.backgroundImg}
          src={BackGroundImage}
          alt="background"
        /> */}
      </div>

      <div className={styles.content}>
        <div>
          <h1
            className={`${styles.homeTitle} animate__animated animate__fadeInDown`}
          >
            Welcome To AyShop
          </h1>
          <p
            className={`${styles.subInfo} animate__animated animate__fadeInDown animate__delay-1s`}
          >
            Keep The Summer Vibe Alive
          </p>
        </div>

        <div>
          <Link to={"/shop"}>
            <button className={styles.shopBtn}>Shop Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
