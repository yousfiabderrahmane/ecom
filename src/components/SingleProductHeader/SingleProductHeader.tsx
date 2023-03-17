import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import styles from "./SingleProductHeader.module.scss";
import { useEffect, useState } from "react";

export const SingleProductHeader = () => {
  const singleProduct = useAppSelector(
    (state) => state.singleProduct.SingleProduct
  );

  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    if (singleProduct.category === "women's clothing") {
      setCurrentCategory("Women");
    } else if (singleProduct.category === "men's clothing") {
      setCurrentCategory("Men");
    } else if (singleProduct.category === "jewelery") {
      setCurrentCategory("Jewelery");
    } else {
      setCurrentCategory("Electronics");
    }
  }, [singleProduct.category]);

  return (
    <section
      className={`${styles.headerContainer} animate__animated animate__fadeInDown`}
    >
      <div>
        <h1>
          <Link to={"/"}>Home </Link> / <Link to={"/shop"}>Products</Link> /{" "}
          <Link to={`/products/${currentCategory}`}>
            {singleProduct.category}
          </Link>{" "}
          / {singleProduct.title}
        </h1>
      </div>
    </section>
  );
};
