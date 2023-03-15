import styles from "./SideCart.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-bold-svgrepo-com.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/products/productsSlice";
import { CartItem } from "./CartItem";

type SideCartProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideCart = ({ setIsOpen, isOpen }: SideCartProps) => {
  const closeCart = () => {
    setIsOpen(false);
  };

  const cart = useAppSelector(selectCart);

  const { products } = cart;

  return (
    <div className={`${isOpen && styles.sideCartOverlay} `}>
      <div className={`${styles.sideCart} ${isOpen && styles.sideCartOpen}`}>
        <div className={styles.top}>
          <CloseIcon className={styles.closeIcon} onClick={closeCart} />
          <h1>Cart</h1>
        </div>

        {isOpen && (
          <div className={styles.cartItems}>
            {products.length > 0 &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
