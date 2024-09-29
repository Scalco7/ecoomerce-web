"use client";
import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CorrectIcon from "@/components/icons/correctIcon/correctIcon";
import CardIcon from "@/components/icons/cardIcon/cardIcon";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function CheckoutPayment() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <section className={styles.titleSection}>
          <CardIcon size={40} color="#000" />
          <p className={zillaSlab.className}>Pagamento</p>
        </section>
        <section className={styles.dataSection}>
          <div className={styles.boxButton}>
            <SecondaryButton
              width={"100%"}
              height={"54px"}
              text="Confirmar Dados"
              textTransform="none"
              onClick={() => {}}
            />
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}
