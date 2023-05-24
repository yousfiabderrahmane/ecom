import styles from "./Products.module.scss";
import womenBg from "../../assets/images/womenClothing.jpg";
import menBg from "../../assets/images/menClothing.jpg";
import jeweleryBg from "../../assets/images/jewelery.jpg";
import electronicsBg from "../../assets/images/electronics.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

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
            <Button variant="products" label="Jewelery" />
          </div>
          <div onClick={() => handleRedirect("Women")} className={styles.b}>
            {" "}
            <img className={styles.image} src={womenBg} alt="women" />
            <Button variant="products" label="Women" />
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
            <Button variant="products" label="Electronics" />
          </div>
          <div onClick={() => handleRedirect("Men")} className={styles.d}>
            <img className={styles.image} src={menBg} alt="men" />
            <Button variant="products" label="Men" />
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};
