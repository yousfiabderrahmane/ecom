import styles from "./ShopHome.module.scss";
import shopBg from "../../assets/images/shopBg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../redux/hooks";
import Error from "../Error/Error";
import { Heading } from "../Heading/Heading";

export const ShopHome = () => {
  const error = useAppSelector((state) => state.products.error);

  return (
    <section
      className={`${styles.homeContainer} ${error && styles.fullHeight}`}
    >
      <div className={styles.bgContainer}>
        <LazyLoadImage
          wrapperClassName={styles.backgroundImg}
          src={shopBg}
          alt="background"
          placeholderSrc={shopBg}
          effect="blur"
        />
      </div>

      {error ? (
        <Error error={error} />
      ) : (
        <div className={styles.content}>
          <Heading
            title="Our Shop"
            subtitle="When the product is right, you don’t have to be a great Marketer."
          />
        </div>
      )}
    </section>
  );
};
