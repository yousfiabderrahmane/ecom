import React from "react";

import "./Button.css";

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
    <button className={variant} {...props}>
      {label}
    </button>
  );
};
