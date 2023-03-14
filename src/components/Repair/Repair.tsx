import styles from "./Repair.module.scss";
import repairBg from "../../assets/images/repairSection.jpg";

export const Repair = () => {
  return (
    <section className={styles.repairContainer}>
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <p>Repair Services</p>
        <h1>
          Up to <span> 40% off</span> - All t-Shirts & Accessories
        </h1>
        <div>
          <button>Explore More</button>
        </div>
      </div>
    </section>
  );
};
