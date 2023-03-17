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
  selectFavorites,
} from "../../redux/products/productsSlice";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: product;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => selectCart(state));
  const favorites = useAppSelector(selectFavorites);

  const exists = cart.products.find((i) => i.id === product.id);
  const isFavorite = favorites.find((i) => i.id === product.id);

  //functions
  const handleAddFav = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  const handleAddToCart = () => {
    dispatch(toggleCart({ id: product.id }));
  };
  const handleRedirect = () => {
    navigate(`/product/${product.id}`);
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
        isFavorite && styles.productIsFav
      }`}
    >
      <div className={styles.imageContainer}>
        <div className={styles.priceContainer}>
          <p>${product.price}</p>
        </div>

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
          <button onClick={handleRedirect}>More Details</button>
        </div>
      </div>
    </div>
  );
};
