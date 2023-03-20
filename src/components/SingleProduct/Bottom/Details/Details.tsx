import { singleProduct } from "../../../../redux/SingleProduct/types";
import styles from "./Details.module.scss";

interface IProps {
  singleProduct: singleProduct;
}

export const Details = ({ singleProduct }: IProps) => {
  return (
    <section
      className={`${styles.detailsContainer} animate__animated animate__fadeInUp animate__faster`}
    >
      <div className={styles.topSection}>
        <h3>{singleProduct.title}</h3>
        <p>{singleProduct.description}</p>
      </div>

      <div className={styles.bottomSection}>
        <div>
          <h4>What is this ?</h4>
          <ul className={styles.list}>
            <li>
              <span>Wrap closure</span>
            </li>
            <li>
              <span>Hand wash only</span>
            </li>
            <li>
              <span>Simple yet flaterring</span>
            </li>
          </ul>
        </div>

        <div>
          <h4>What makes our products unique ?</h4>
          <p>
            Always bring you new fashion style and pretty design. We dedicated
            our effort to design beautiful clothing in top quality
          </p>
        </div>

        <div>
          <h4>Washing instructions</h4>
          <p>Hand wash or gentle machine wash with cold water</p>
        </div>
      </div>
    </section>
  );
};
