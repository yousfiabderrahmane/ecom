import { LazyLoadImage } from "react-lazy-load-image-component";
import BackGroundImage from "../../assets/images/home-background.jpg";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

export const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.bgContainer}>
        <LazyLoadImage
          alt={"bghome"}
          effect="blur"
          src={BackGroundImage}
          placeholderSrc={BackGroundImage}
          wrapperClassName={styles.BackGroundImage}
        />
      </div>

      <div className={styles.content}>
        <Heading
          title=" Welcome To AyShop"
          subtitle="Keep The Summer Vibe Alive"
        />

        <div>
          <Link to={"/shop"}>
            <Button label="Shop Now" variant="shop" />
          </Link>
        </div>
      </div>
    </section>
  );
};
