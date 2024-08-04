import Image from "next/image";
import styles from "./style.module.css";
import { Sedgwick_Ave_Display, Zilla_Slab } from "next/font/google";

export interface PhotoHistoryProps {
  title?: string;
  titleColor?: string;
  history: string;
  imageSrc: string;
}

const zillaSlab = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sedgwickAveDisplay = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function PhotoHistory({
  title,
  titleColor = "white",
  history,
  imageSrc,
}: PhotoHistoryProps) {
  return (
    <main className={styles.main}>
      <section className={styles.infoSection}>
        {title && (
          <p
            className={`${sedgwickAveDisplay.className} ${styles.title}`}
            style={{ color: titleColor }}
          >
            {title}
          </p>
        )}
        <p className={zillaSlab.className}>{history}</p>
      </section>
      <section className={styles.imageSection}>
        <Image objectFit="contain" src={imageSrc} alt={"Foto"} fill={true} />
      </section>
    </main>
  );
}
