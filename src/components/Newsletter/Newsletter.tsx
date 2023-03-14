import { useEffect, useRef, useState } from "react";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);

  const handleClick = () => {
    if (!email && inputRef.current) {
      inputRef.current.focus();
    } else {
      setDisplayInfo(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setEmail("");
      setDisplayInfo(false);
    }, 2000);
  }, [displayInfo]);

  return (
    <section className={styles.newsContainer}>
      <div className={styles.left}>
        <h1>Sign Up For Newsletters</h1>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.rightInputContainer}>
          <input
            value={email}
            ref={inputRef}
            placeholder="Type your email ..."
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleClick}>Sign Up</button>

          {displayInfo && (
            <p className={styles.info}>
              Email Succesfuly Sent To <span>{email}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
