import styles from "./Products.module.scss";
import womenBg from "../../assets/images/womenClothing.jpg";
import menBg from "../../assets/images/menClothing.jpg";
import jeweleryBg from "../../assets/images/jewelery.jpg";
import electronicsBg from "../../assets/images/electronics.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(`/products/${path}`);
  };

  return (
    <section className={styles.productsContainer}>
      <h2 className={styles.title}>
        <span> Our Products</span>
      </h2>

      <AnimationOnScroll animateIn="animate__zoomIn" animateOnce>
        <div className={styles.angryGrid}>
          <div onClick={() => handleRedirect("Jewelery")} className={styles.a}>
            <img className={styles.image} src={jeweleryBg} alt="jewelery" />
            <button className={styles.redirectBtn}>Jewelery</button>
          </div>
          <div onClick={() => handleRedirect("Women")} className={styles.b}>
            {" "}
            <img className={styles.image} src={womenBg} alt="women" />
            <button className={styles.redirectBtn}>Women</button>
          </div>
          <div
            onClick={() => handleRedirect("Electronics")}
            className={styles.c}
          >
            <img
              className={styles.image}
              src={electronicsBg}
              alt="electronics"
            />
            <button className={styles.redirectBtn}>Electronics</button>
          </div>
          <div onClick={() => handleRedirect("Men")} className={styles.d}>
            <img className={styles.image} src={menBg} alt="men" />
            <button className={styles.redirectBtn}>Men</button>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};
