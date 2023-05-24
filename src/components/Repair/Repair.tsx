import { Link } from "react-router-dom";
import styles from "./Repair.module.scss";
import { Button } from "../Button/Button";

export const Repair = () => {
  return (
    <section className={styles.repairContainer}>
      <div className={styles.content}>
        <p>Repair Services</p>
        <h1>
          Up to <span> 40% off</span> - All t-Shirts & Accessories
        </h1>
        <div>
          <Link to={"/shop"}>
            <Button variant="repair" label="Explore More" />
          </Link>
        </div>
      </div>
    </section>
  );
};
