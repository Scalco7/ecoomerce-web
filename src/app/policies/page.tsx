"use client";

import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";
import { Zilla_Slab } from "next/font/google";
import { useState } from "react";
import PrivacySection from "@/components/organisms/policiesSection/privacySection/privacySection";
import ExchangesSection from "@/components/organisms/policiesSection/exchangesSection/exchangesSection";
import DeliverySection from "@/components/organisms/policiesSection/deliverySection/deliverySection";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Policies() {
  const searchParams = useSearchParams();
  const [section, setSection] = useState(
    searchParams.get("section") ?? "privacy"
  );

  const sectionMap: { [key: string]: any } = {
    delivery: <DeliverySection />,
    exchanges: <ExchangesSection />,
    privacy: <PrivacySection />,
    term: <main>term</main>,
  };

  function handleChangeSection(sectionSelected: string) {
    setSection(sectionSelected);
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body} ${zillaSlab.className}`}>
        <p className={styles.title}>Políticas do Site</p>
        <section className={styles.dataSection}>
          <nav className={styles.navBar}>
            <section
              className={`${styles.navTextBox} ${styles.borderRight} ${
                section == "delivery" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("delivery")}
            >
              Política de Entrega
            </section>
            <section
              className={`${styles.navTextBox} ${styles.borderRight} ${
                section == "exchanges" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("exchanges")}
            >
              Política de Trocas e Devoluções
            </section>
            <section
              className={`${styles.navTextBox} ${styles.borderRight} ${
                section == "term" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("term")}
            >
              Política de Prazo e Formas de Entrega
            </section>
            <section
              className={`${styles.navTextBox} ${
                section == "privacy" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("privacy")}
            >
              Política de Privacidade
            </section>
          </nav>
          {sectionMap[section]}
        </section>
      </section>
    </main>
  );
}
