import React from "react";
import "./Button.css";

interface ButtonProps {
  variant: string;
  label: string;
}

export const Button = ({
  variant = "primary",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button className={variant} {...props}>
      {label}
    </button>
  );
};
