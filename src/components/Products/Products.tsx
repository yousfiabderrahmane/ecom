import { useAppSelector } from "../../redux/hooks";
import styles from "./Products.module.scss";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { Product } from "../Product/Product";
import { Filter } from "../Filter/Filter";
import { selectFilter } from "../../redux/products/productsSlice";
import womenBg from "../../assets/images/womenClothing.jpg";
import menBg from "../../assets/images/menClothing.jpg";
import jeweleryBg from "../../assets/images/jewelery.jpg";
import electronicsBg from "../../assets/images/electronics.jpg";

export const Products = () => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const error = useAppSelector((state) => state.products.error);

  const filter = useAppSelector(selectFilter);

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

  return (
    <section className={styles.productsContainer}>
      <h2 className={styles.title}>
        <span> Our Products</span>
      </h2>

      <div className={styles.angryGrid}>
        <div className={styles.a}>
          <img className={styles.image} src={jeweleryBg} alt="jewelery" />
          <button className={styles.redirectBtn}>Jewelery</button>
        </div>
        <div className={styles.b}>
          {" "}
          <img className={styles.image} src={womenBg} alt="women" />
          <button className={styles.redirectBtn}>Women</button>
        </div>
        <div className={styles.c}>
          <img className={styles.image} src={electronicsBg} alt="electronics" />
          <button className={styles.redirectBtn}>Electronics</button>
        </div>
        <div className={styles.d}>
          <img className={styles.image} src={menBg} alt="men" />
          <button className={styles.redirectBtn}>Men</button>
        </div>
      </div>

      {/* <Filter />
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>We've got a problem chief !</h3>}

      {products.length > 0 && (
        <div
          className={`${styles.productsGridContainer} animate__animated animate__fadeIn`}
        >
          {filter === "all" &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {filter === "jewelery" &&
            jewelery.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {filter === "electronics" &&
            electronics.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {filter === "men's clothing" &&
            men.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {filter === "women's clothing" &&
            women.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      )} */}
    </section>
  );
};
