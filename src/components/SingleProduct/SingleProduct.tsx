import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./SingleProduct.module.scss";
import { ReactComponent as RatingStar } from "../../assets/svg/fillStar.svg";
import { ReactComponent as EmptyHeart } from "../../assets/svg/emptyheart.svg";
import { ReactComponent as FilledHeart } from "../../assets/svg/filledheart.svg";
import { ReactComponent as Question } from "../../assets/svg/question.svg";
import { ReactComponent as Gift } from "../../assets/svg/singleGift.svg";
import { ReactComponent as Delivery } from "../../assets/svg/singleDelivery.svg";
import { useEffect, useState } from "react";
import { toggleFavorite } from "../../redux/products/productsSlice";
import {
  addToCart,
  removeFromCart,
} from "../../redux/SingleProduct/singleProductSlice";

const colors = ["#f7967c", "#9999ff", "#99cc99"];
const sizes = ["S", "M", "L", "XL"];

interface IProps {
  randomReduction: number;
}

const SingleProduct = ({ randomReduction }: IProps) => {
  const SingleProduct = useAppSelector(
    (state) => state.singleProduct.SingleProduct
  );

  const favorite = useAppSelector((state) => state.products.favoriteProducts);
  const cart = useAppSelector((state) => state.singleProduct.cart);
  const dispatch = useAppDispatch();

  console.log(cart);

  const exists = favorite.find((product) => product.id === SingleProduct.id);

  const inCart = cart.products.find(
    (product) => product.id === SingleProduct.id
  );

  const [numberOfItems, setNumberOfItems] = useState(1);
  const [currentColor, setCurrentColor] = useState("#f7967c");
  const [currentSize, setCurrentSize] = useState("S");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        quantity: numberOfItems,
        color: currentColor,
        size: currentSize,
        id: SingleProduct.id,
      })
    );
    setNumberOfItems(1);
  };
  const handleRemove = () => {
    dispatch(removeFromCart({ id: SingleProduct.id }));
  };

  useEffect(() => {
    if (exists) {
      setIsFavorite(true);
    }
  }, [exists]);

  return (
    <section className={styles.productContainer}>
      <div className={`${styles.left} animate__animated animate__fadeInLeft`}>
        <div className={styles.imageContainer}>
          <img src={SingleProduct.image} alt={SingleProduct.title} />
        </div>
      </div>

      <div className={`${styles.right} animate__animated animate__fadeInRight`}>
        <div className={styles.title}>
          <h2>{SingleProduct.title}</h2>
        </div>

        <div className={styles.ratingPriceContainer}>
          <div className={styles.priceContainer}>
            <p className={styles.newPrice}>${SingleProduct.price} / </p>
            <del>
              <p className={styles.oldPrice}>
                $
                {(
                  SingleProduct.price +
                  (SingleProduct.price * randomReduction) / 100
                ).toFixed(2)}
              </p>
            </del>
            <p className={styles.reduction}>{randomReduction}%</p>
          </div>
          <div className={styles.ratingContainer}>
            <div className={styles.rating}>
              <RatingStar className={styles.starIcon} />
              <p>
                {SingleProduct.rating.rate}{" "}
                <span> ({SingleProduct.rating.count})</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.colorsContainer}>
          <h2>Color :</h2>
          <div className={styles.buttonsContainer}>
            {colors.map((color) => (
              <button
                onClick={() => setCurrentColor(color)}
                key={color}
                className={`${styles.colorButton} ${
                  color === currentColor && styles.active
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        <div className={styles.sizeContainer}>
          <h3>Size :</h3>
          <div className={styles.sizeButtons}>
            {sizes.map((size) => (
              <button
                onClick={() => setCurrentSize(size)}
                key={size}
                className={`${styles.sizeButton} ${
                  size === currentSize && styles.activeSize
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.addToCartContainer}>
          {inCart ? (
            <div className={`${styles.addToCartButton} ${styles.fullWidth}`}>
              {" "}
              <button onClick={handleRemove} className={styles.removeBtn}>
                REMOVE FROM CART
              </button>{" "}
            </div>
          ) : (
            <>
              <div className={styles.quantityButtons}>
                <button
                  onClick={() => {
                    numberOfItems !== 1 && setNumberOfItems(numberOfItems - 1);
                  }}
                >
                  -
                </button>
                <p>{numberOfItems}</p>
                <button onClick={() => setNumberOfItems(numberOfItems + 1)}>
                  +
                </button>
              </div>
              <div className={styles.addToCartButton}>
                <button onClick={handleAddToCart}>ADD TO CART</button>
              </div>
            </>
          )}
        </div>

        <div className={styles.wishlistAndQuestionContainer}>
          <div className={styles.wishlist}>
            {isFavorite ? (
              <FilledHeart
                onClick={() => {
                  dispatch(toggleFavorite({ id: SingleProduct.id }));
                  setIsFavorite(false);
                }}
                className={styles.miniIcon}
              />
            ) : (
              <EmptyHeart
                onClick={() => {
                  dispatch(toggleFavorite({ id: SingleProduct.id }));
                  setIsFavorite(true);
                }}
                className={styles.miniIcon}
              />
            )}
            <p>{isFavorite ? "Remove From Wishlist" : "Add To Wishlist"}</p>
          </div>
          <div className={styles.question}>
            <Question className={styles.miniIcon} />
            <p>Ask a Question</p>
          </div>
        </div>

        <div className={styles.deliveryAndGiftContainer}>
          <div className={styles.container}>
            <Gift className={styles.miniIcon} />
            <p>
              Free Shipping & return<span> On orders over $100</span>
            </p>
          </div>
          <div className={styles.container}>
            <Delivery className={styles.miniIcon} />
            <p>
              Estimated Delivery Time<span> 7 days</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
