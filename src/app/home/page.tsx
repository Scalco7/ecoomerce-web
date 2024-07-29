"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Image from "next/image";
import styles from "./style.module.css";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={styles.firstSection}>
        <Image src={"/basquete-back-home.png"} alt="background" fill={true} />
        <section className={styles.firstTextBox}>
          <p className={`${styles.fistFirstText} ${anton.className}`}>
            Banana Monkey's
          </p>
          <p className={`${styles.fistSecondaryText}`}>Descubra a força</p>
        </section>
      </section>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </main>
  );
}
