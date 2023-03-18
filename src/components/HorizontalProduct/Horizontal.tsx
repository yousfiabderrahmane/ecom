import { product } from "../../redux/products/types";
import styles from "./Horizontal.module.scss";
import { ReactComponent as AddToFav } from "../../assets/svg/AddToFav.svg";
import { ReactComponent as RemoveFav } from "../../assets/svg/removeFav.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  toggleFavorite,
  selectFavorites,
} from "../../redux/products/productsSlice";
import { useNavigate } from "react-router-dom";
interface IProps {
  product: product;
}

export const Horizontal = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favorites = useAppSelector(selectFavorites);

  const isFavorite = favorites.find((i) => i.id === product.id);

  //functions
  const handleAddFav = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  const handleRedirect = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={`${
        styles.horizontalProduct
      } animate__animated animate__zoomIn ${isFavorite && styles.productIsFav}`}
    >
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
        <div
          onClick={handleAddFav}
          className={`${styles.favoriteContainer} ${
            isFavorite && styles.removeMe
          }`}
        >
          {isFavorite ? (
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
          <button onClick={handleRedirect}>More Details</button>
        </div>
      </div>
    </div>
  );
};
