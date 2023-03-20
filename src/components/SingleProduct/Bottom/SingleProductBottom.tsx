import { useState } from "react";
import styles from "./SingleProductBottom.module.scss";
import { Details } from "./Details/Details";
import { useAppSelector } from "../../../redux/hooks";

const sections = ["Details", "Reviews", "Shipping"];

const SingleProductBottom = () => {
  const [currentSection, setCurrentSection] = useState<string>("Details");

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
        {currentSection === "Details" && (
          <Details singleProduct={singleProduct} />
        )}
      </div>
    </section>
  );
};

export default SingleProductBottom;
