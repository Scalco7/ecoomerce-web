import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

interface InputProps {
  placeholder: string;
}

const zillaSlab = Zilla_Slab({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      className={`${zillaSlab.className} ${styles.input}`}
      placeholder={placeholder}
    />
  );
}
