"use client";

import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CardIcon from "@/components/icons/cardIcon/cardIcon";
import Input from "@/components/atoms/input/input";

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
          <section className={styles.subSection}>
            <p className={`${zillaSlab.className} ${styles.sectionTitle}`}>
              1 - Dados do pagador
            </p>
            <section className={styles.inputSection}>
              <Input placeholder="Nome completo" />
              <Input placeholder="E-mail" />
              <Input placeholder="CPF" />
              <Input placeholder="Celular com DDD" />
            </section>
          </section>

          <div className={styles.boxButton}>
            <SecondaryButton
              width={"100%"}
              height={"54px"}
              text="Confirmar Dados"
              textTransform="uppercase"
              onClick={() => {}}
            />
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}
