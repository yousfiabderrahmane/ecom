import { useAppSelector } from "../../redux/hooks";
import { selectFilter } from "../../redux/products/productsSlice";
import { Filter } from "../Filter/Filter";
import { Product } from "../Product/Product";
import styles from "./ShopList.module.scss";

export const ShopList = () => {
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
    <section className={styles.shopListContainer}>
      <div className={styles.shopList}>
        <Filter />
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
        )}
      </div>
    </section>
  );
};
