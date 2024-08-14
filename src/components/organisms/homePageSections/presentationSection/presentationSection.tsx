import { Anton, Zilla_Slab_Highlight } from "next/font/google";
import styles from "./style.module.css";
import Image from "next/image";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabHighlight = Zilla_Slab_Highlight({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function PresentationSection() {
  const isDesktop = useClientMediaQuery("(min-width: 576px)");

  return (
    <main className={styles.main}>
      <section className={styles.imgBox}>
        <Image
          src={
            isDesktop
              ? "/basquete-back-home.png"
              : "/basquete-back-home-mobile.png"
          }
          alt="background"
          fill={true}
        />
      </section>

      <section className={styles.textBox}>
        <p className={`${styles.firstText} ${anton.className}`}>
          Banana {"Monkey's"}
        </p>
        <p className={`${styles.secondaryText}`}>Descubra a força</p>
      </section>

      <p className={`${zillaSlabHighlight.className} ${styles.mobileText}`}>
        Uma marca criada especialmente para quem gosta de vencer!
      </p>
    </main>
  );
}
