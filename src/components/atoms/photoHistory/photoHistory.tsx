import Image from "next/image";
import styles from "./style.module.css";
import { Sedgwick_Ave_Display } from "next/font/google";

interface PhotoHistoryProps {
  title?: string;
  titleColor?: string;
  history: string;
  imageSrc: string;
}

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
        <p>{history}</p>
      </section>
      <section className={styles.imageSection}>
        <Image objectFit="contain" src={imageSrc} alt={"Foto"} fill={true} />
      </section>
    </main>
  );
}
