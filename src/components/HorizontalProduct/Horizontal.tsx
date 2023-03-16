import { product } from "../../redux/products/types";
import styles from "./Horizontal.module.scss";
import { ReactComponent as AddToFav } from "../../assets/svg/AddToFav.svg";
import { ReactComponent as RemoveFav } from "../../assets/svg/removeFav.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  toggleCart,
  selectCart,
  toggleFavorite,
} from "../../redux/products/productsSlice";
interface IProps {
  product: product;
}

export const Horizontal = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => selectCart(state));

  const exists = cart.products.find((i) => i.id === product.id);

  //functions
  const handleAddFav = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  const handleAddToCart = () => {
    dispatch(toggleCart({ id: product.id }));
  };

  return (
    <div
      className={`${
        styles.horizontalProduct
      } animate__animated animate__zoomIn ${
        product.isFavorite && styles.productIsFav
      }`}
    >
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
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
      </div>

      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>

        <p className={styles.description}>
          {product.description.substring(0, 100)}...
        </p>
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
