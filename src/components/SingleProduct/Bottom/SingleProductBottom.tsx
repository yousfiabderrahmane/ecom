import { useState } from "react";
import styles from "./SingleProductBottom.module.scss";
import { Details } from "./Details/Details";
import { useAppSelector } from "../../../redux/hooks";
import Shipping from "./Shipping/Shipping";
import Reviews from "./Reviews/Reviews";
import NewReview from "./Reviews/NewReview";

const sections = ["Details", "Reviews", "Shipping"];

const SingleProductBottom = () => {
  const [currentSection, setCurrentSection] = useState<string>("Details");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const singleProduct = useAppSelector(
    (state) => state.singleProduct.SingleProduct
  );

  return (
    <section className={styles.bottomSection}>
      <div className={styles.filterSection}>
        {sections.map((section) => (
          <h3
            className={`${styles.section} ${
              currentSection === section && styles.active
            }`}
            key={section}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </h3>
        ))}
      </div>

      <div className={styles.contentContainer}>
        {currentSection === "Details" ? (
          <Details singleProduct={singleProduct} />
        ) : currentSection === "Shipping" ? (
          <Shipping />
        ) : (
          <Reviews
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            singleProduct={singleProduct}
          />
        )}
      </div>
      {isOpen && <NewReview setIsOpen={setIsOpen} />}
    </section>
  );
};

export default SingleProductBottom;
