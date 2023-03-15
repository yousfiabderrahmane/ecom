import { product } from "../../redux/products/types";
import styles from "./Product.module.scss";
import { ReactComponent as AddToFav } from "../../assets/svg/AddToFav.svg";
import { ReactComponent as RemoveFav } from "../../assets/svg/removeFav.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  toggleCart,
  selectCart,
  selectProductById,
  toggleFavorite,
} from "../../redux/products/productsSlice";

interface ProductProps {
  product: product;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => selectCart(state));

  const thisProduct = useAppSelector((state) =>
    selectProductById(state, product.id)
  );

  const exists = cart.products.find((i) => i.id === product.id);

  //functions
  const handleAddFav = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  const handleAddToCart = () => {
    dispatch(toggleCart({ id: product.id }));
  };

  //display rating stars
  const { rating } = product;
  const { rate } = rating;
  let i = 0;
  const arr = [];

  do {
    i++;
    arr.push(i);
  } while (i < Math.floor(rate));

  return (
    <div
      className={`${styles.productCard} animate__animated animate__zoomIn ${
        product.isFavorite && styles.productIsFav
      }`}
    >
      <div className={styles.imageContainer}>
        <div className={styles.priceContainer}>
          <p>${product.price}</p>
        </div>

        <div
          onClick={handleAddFav}
          className={`${styles.favoriteContainer} ${
            product.isFavorite && styles.removeMe
          }`}
        >
          {product.isFavorite ? (
            <RemoveFav className={`${styles.favoriteIcon}`} />
          ) : (
            <AddToFav className={styles.favoriteIcon} />
          )}
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
              <Star key={i} className={styles.ratingIcon} />
            ))}
          </div>
          <span>({product.rating.count})</span>
        </div>

        <div className={styles.title}>
          <p>{product.title}</p>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={exists && styles.cantAdd}
            onClick={handleAddToCart}
          >
            {exists ? "Remove From Cart" : "Add To Cart"}
          </button>
          <button>More Details</button>
        </div>
      </div>
    </div>
  );
};
