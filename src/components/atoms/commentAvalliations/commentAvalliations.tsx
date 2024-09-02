import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

interface CommentAvalliationsProps {
  comment: string;
  name: string;
}

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function CommentAvalliations({
  comment,
  name,
}: CommentAvalliationsProps) {
  return (
    <main className={styles.main}>
      <p className={`${zillaSlab.className} ${styles.comment}`}>"{comment}"</p>
      <p className={styles.name}>{name}</p>
    </main>
  );
}
