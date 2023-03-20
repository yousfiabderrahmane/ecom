import { useEffect, useState } from "react";
import { singleProduct } from "../../redux/SingleProduct/types";
import { product } from "../../redux/products/types";
import SingleProduct from "../SingleProduct/SingleProduct";
import styles from "./CartItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../../redux/SingleProduct/singleProductSlice";

interface CartItemProps {
  product: singleProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  const [color, setColor] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product.color === "#f7967c") {
      setColor("pink");
    } else if (product.color === "#9999ff") {
      setColor("violet");
    } else {
      setColor("light-green");
    }
  }, []);

  return (
    <div className={`${styles.item} animate__animated fadeIn`}>
      <div className={styles.left}>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => dispatch(increaseQuantity({ id: product.id }))}
          >
            +
          </button>
          <p>{product.quantity}</p>
          <button
            onClick={() =>
              product.quantity !== 1 &&
              dispatch(decreaseQuantity({ id: product.id }))
            }
          >
            -
          </button>
        </div>

        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className={styles.right}>
        <h3>{product.title}</h3>
        <p>
          <span>Color : </span>
          {color}
        </p>
        <p>
          <span>Size : </span>
          {product.size}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteFromCart({ id: product.id }))}
        className={styles.deleteBtn}
      >
        X
      </button>
    </div>
  );
};
