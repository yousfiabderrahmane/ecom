import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <h1 className={styles.logo}>AyShop</h1>

      <div className={styles.footerContainer}>
        <div className={styles.section}>
          <h1>Contact</h1>
          <div className={styles.content}>
            <p>
              <span>Adress: </span> Rabat, Morocco 📍
            </p>
            <p>
              <span>Phone: </span>+212 656-286775
            </p>
            <p>
              <span>Mail: </span>bdrrhmnyousfi@gmail.com
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h1>About Me</h1>
          <div className={styles.content}>
            <p>Yousfi Abderrahmane</p>
            <p>18 Years Old</p>
            <p>Moroccan ©</p>
          </div>
        </div>

        <div className={styles.section}>
          <h1>Media</h1>
          <div className={styles.content}>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/yousfiabderrahmane"
              >
                <span>Github</span>
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abderrahmane-yousfi-661628260/"
              >
                <span>LinkedIn</span>
              </a>
            </p>

            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href=" https://www.instagram.com/yousfi_3/"
              >
                <span>Instagram</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 All rights reserved </p>
      </div>
    </section>
  );
};
