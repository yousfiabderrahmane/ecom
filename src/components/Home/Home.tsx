import BackGroundImage from "../../assets/images/home-background.jpg";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <img
          className={styles.backgroundImg}
          src={BackGroundImage}
          alt="background"
        />
      </div>

      <div className={styles.content}>
        <div>
          <h1 className={styles.homeTitle}>Welcome To AyShop</h1>
          <p className={styles.subInfo}>Keep The Summer Vibe Alive</p>
        </div>

        <div>
          <button className={styles.shopBtn}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};
