import React from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  title: string;
  subtitle: string;
}

export const Heading = ({ title, subtitle, ...props }: HeadingProps) => {
  return (
    <div>
      <h1 className={`${styles.title} animate__animated animate__fadeInDown`}>
        {title}
      </h1>
      <p
        className={`${styles.subtitle} animate__animated animate__fadeInDown animate__delay-1s`}
      >
        {subtitle}
      </p>
    </div>
  );
};
