import { useAppDispatch } from "../../redux/hooks";
import {} from "../../redux/products/productsSlice";
import { product } from "../../redux/products/types";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  product: product;
}

export const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();

  // const handleIncrease = () => {
  //   dispatch(increaseQuantity({ id: product.id }));
  // };
  // const handleDecrease = () => {
  //   dispatch(decreaseQuantity({ id: product.id }));
  // };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemLeft}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt="productPicture" />
        </div>
      </div>
      <div className={styles.itemRight}>
        <div className={styles.itemInfo}>
          <p className={styles.name}>{product.title}</p>
        </div>
        <div className={styles.quantityButtons}>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
