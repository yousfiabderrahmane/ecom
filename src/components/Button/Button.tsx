import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "products" | "repair";
  label: string;
}

export const Button = ({
  variant = "products",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button className={styles[variant]} {...props}>
      {label}
    </button>
  );
};
