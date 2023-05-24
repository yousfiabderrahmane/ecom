import React from "react";
import { ReactComponent as NavCart } from "../../assets/svg/nav-cart.svg";

import styles from "./Button.module.scss";

interface ButtonProps {
  variant: string;
  label: string;
  active?: boolean;
}

export const Button = ({
  variant = "products",
  label,
  active,
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
      {variant === "nav" && <NavCart fill="white" className={styles.icon} />}
    </button>
  );
};
