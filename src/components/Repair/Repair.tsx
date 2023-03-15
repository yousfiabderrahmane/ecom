import { Link } from "react-router-dom";
import styles from "./Repair.module.scss";

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
          <Link to={"/shop"}>
            <button>Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
