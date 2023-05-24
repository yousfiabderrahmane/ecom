import React from "react";
import { ReactComponent as NavCart } from "../../assets/svg/nav-cart.svg";
import { ReactComponent as NavStar } from "../../assets/svg/nav-star.svg";

import styles from "./Button.module.scss";

interface ButtonProps {
  variant: string;
  label: string;
  active?: boolean;
  icon?: string;
}

export const Button = ({
  variant = "products",
  label,
  active,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles[variant]} ${
        active && variant === "category" && styles.active
      } ${active && variant === "size" && styles.activeSize}
      ${active && variant === "color" && styles.activeColor}`}
      {...props}
    >
      {label}
      {icon === "cart" && <NavCart fill="white" className={styles.icon} />}
      {icon === "wish" && <NavStar fill="white" className={styles.icon} />}
    </button>
  );
};
