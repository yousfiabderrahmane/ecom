import { useEffect, useState } from "react";
import { selectFavorites } from "../../redux/products/productsSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
//components
import { SideCart } from "../SideCart/SideCart";
//svg
import { ReactComponent as NavStar } from "../../assets/svg/nav-star.svg";
import { ReactComponent as NavCart } from "../../assets/svg/nav-cart.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../assets/svg/arrow-up.svg";
import styles from "./Navbar.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { Button } from "../Button/Button";

const productsList = ["Men", "Jewelery", "Electronics", "Women"];

export const Navbar = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean | undefined>(false);

  const navigate = useNavigate();
  const location = useLocation();

  //sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [canShow, setCanShow] = useState(false);

  const cart = useAppSelector((state) => state.singleProduct.cart);
  const favoriteList = useAppSelector(selectFavorites);

  const changeNav = () => {
    window.scrollY >= 5 ? setScroll(true) : setScroll(false);
  };

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (location.pathname.slice(0, 9) != "/product/") {
      window.addEventListener("scroll", changeNav);
    } else {
      setScroll(true);
    }
  }, [location.pathname, scroll]);

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          styles.navbarScroll
        }  animate__animated ${animate && "animate__fadeInDown"} animate__once`}
        onAnimationEnd={() => setAnimate(false)}
      >
        <div className={styles.iconContainer}>
          <button
            onClick={() => {
              navigate("/wishlist");
            }}
            className={styles.navRedirectButtons}
          >
            Wishlist
            <NavStar fill="white" className={styles.icon} />
          </button>
          {favoriteList.length > 0 && (
            <span className={styles.overlayInfo}>{favoriteList.length}</span>
          )}
        </div>
        <div className={styles.middle}>
          <Link to={"/"}>
            <button className={styles.navButton}>HOME</button>
          </Link>
          <h1 className={styles.logo}>AyShop</h1>

          <div className={styles.productsButtonContainer}>
            <button onClick={() => setShowList(!showList)}>
              {" "}
              <div className={styles.productsButton}>
                PRODUCTS{" "}
                {showList ? (
                  <UpArrow
                    fill="red"
                    stroke="green"
                    className={styles.dropIcon}
                  />
                ) : (
                  <DownArrow className={styles.dropIcon} />
                )}
              </div>
            </button>

            {showList && (
              <div className={styles.dropDown}>
                {" "}
                {productsList.map((product) => (
                  <Link key={product} to={`/products/${product}`}>
                    <button
                      onClick={() => {
                        setShowList(false);
                        setScroll(true);
                        window.scrollTo(0, 0);
                      }}
                      className={styles.dropdownBtn}
                      key={product}
                    >
                      {product}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            setCanShow(true);
          }}
          className={styles.iconContainer}
        >
          {/* <Button label="Cart" variant="nav" icon="cart"/> */}
          <button className={styles.navRedirectButtons}>
            Cart <NavCart fill="white" className={styles.icon} />
          </button>
          {cart.products.length > 0 && (
            <span className={styles.overlayInfo}>{cart.products.length}</span>
          )}
        </div>
      </nav>
      {canShow && <SideCart setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};
