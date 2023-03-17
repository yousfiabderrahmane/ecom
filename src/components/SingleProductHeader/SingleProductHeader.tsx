import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import styles from "./SingleProductHeader.module.scss";

export const SingleProductHeader = () => {
  const singleProduct = useAppSelector(
    (state) => state.singleProduct.SingleProduct
  );

  const categoryToUpper =
    singleProduct.category.slice(0, 1).toUpperCase() +
    singleProduct.category.slice(1);

  console.log(categoryToUpper);

  return (
    <section
      className={`${styles.headerContainer} animate__animated animate__fadeInDown`}
    >
      <div>
        <h1>
          <Link to={"/"}>Home </Link> / <Link to={"/shop"}>Products</Link> /{" "}
          <Link to={`/products/${categoryToUpper}`}>
            {singleProduct.category}
          </Link>{" "}
          / {singleProduct.title}
        </h1>
      </div>
    </section>
  );
};
