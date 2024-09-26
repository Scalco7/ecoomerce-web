import React from "react";
import styles from "./styles.module.css";

interface SecondaryButtonProps {
  text: string;
  width: string;
  height: string;
  fontSize: number;
  textTransform?: "capitalize" | "lowercase" | "none" | "uppercase";
  Icon?: React.ReactNode;
  onClick: () => void;
}

export default function SecondaryButton({
  text,
  width,
  height,
  fontSize,
  onClick,
  Icon,
  textTransform = "uppercase",
}: SecondaryButtonProps) {
  return (
    <main
      className={styles.main}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        textTransform: textTransform,
      }}
    >
      {Icon && Icon}
      <p>{text}</p>
    </main>
  );
}
