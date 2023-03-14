import { useAppSelector } from "../../redux/hooks";
import styles from "./Products.module.scss";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { Product } from "../Product/Product";

export const Products = () => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const error = useAppSelector((state) => state.products.error);

  return (
    <section className={styles.productsContainer}>
      <h2 className={styles.title}>
        <span> Our Products</span>
      </h2>

      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>We've got a problem chief !</h3>}

      {products.length > 0 && (
        <div className={styles.productsGridContainer}>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
