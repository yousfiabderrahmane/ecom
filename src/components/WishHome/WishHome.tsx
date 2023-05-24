import styles from "./WishHome.module.scss";
import BackGroundImage from "../../assets/images/wishBg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Heading } from "../Heading/Heading";

export const WishHome = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <img
          alt={"bghome"}
          // effect="blur"
          src={BackGroundImage}
          // placeholderSrc={BackGroundImage}
          // wrapperClassName={styles.BackGroundImage}
        />
      </div>

      <div className={styles.content}>
        <Heading
          title="Here is your wishlist"
          subtitle="Terrible taste by the way"
        />
      </div>
    </section>
  );
};
