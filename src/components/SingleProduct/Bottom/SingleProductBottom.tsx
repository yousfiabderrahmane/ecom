import { useState } from "react";
import styles from "./SingleProductBottom.module.scss";

const sections = ["Details", "Reviews", "Shipping"];

const SingleProductBottom = () => {
  const [currentSection, setCurrentSection] = useState<string>("Details");

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
    </section>
  );
};

export default SingleProductBottom;
