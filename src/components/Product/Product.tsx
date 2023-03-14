import { product } from "../../redux/products/types";
import styles from "./Product.module.scss";
import { ReactComponent as AddToFav } from "../../assets/svg/AddToFav.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

interface ProductProps {
  product: product;
}

export const Product = ({ product }: ProductProps) => {
  const { rating } = product;
  const { rate } = rating;

  let i = 0;

  const arr = [];

  do {
    i++;
    arr.push(i);
  } while (i < Math.floor(rate));

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.favoriteContainer}>
          <AddToFav className={styles.favoriteIcon} />
        </div>
        <img
          className={styles.productImage}
          src={product.image}
          alt="product"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.category}>
          <p>{product.category}</p>
        </div>
        <div className={styles.stars}>
          <div>
            {arr.map((i) => (
              <Star className={styles.ratingIcon} />
            ))}
          </div>
          <span>({product.rating.count})</span>
        </div>

        <div className={styles.title}>
          <p>{product.title}</p>
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.productButtons1}>Add To Cart</button>
          <button className={styles.productButtons2}>More Details</button>
        </div>
      </div>
    </div>
  );
};
