import styles from "./Repair.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

export const Repair = () => {
  return (
    <AnimationOnScroll animateIn="animate__slideInRight" animateOnce>
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
    </AnimationOnScroll>
  );
};
