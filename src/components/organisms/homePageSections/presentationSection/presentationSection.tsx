import { Anton } from "next/font/google";
import styles from "./style.module.css";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function PresentationSection() {
  return (
    <main className={styles.main}>
      <Image src={"/basquete-back-home.png"} alt="background" fill={true} />
      <section className={styles.textBox}>
        <p className={`${styles.firstText} ${anton.className}`}>
          Banana Monkey's
        </p>
        <p className={`${styles.secondaryText}`}>Descubra a força</p>
      </section>
    </main>
  );
}
