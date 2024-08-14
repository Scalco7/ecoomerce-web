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
  const isMobile = useClientMediaQuery("(max-width: 575px)");

  return (
    <main className={styles.main}>
      <Image
        src={
          isMobile
            ? "/basquete-back-home-mobile.png"
            : "/basquete-back-home.png"
        }
        alt="background"
        fill={true}
      />
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
