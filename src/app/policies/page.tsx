"use client";

import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";
import { Zilla_Slab } from "next/font/google";
import { Suspense, useState } from "react";
import PrivacySection from "@/components/organisms/policiesSections/privacySection/privacySection";
import ExchangesSection from "@/components/organisms/policiesSections/exchangesSection/exchangesSection";
import DeliverySection from "@/components/organisms/policiesSections/deliverySection/deliverySection";
import TermSection from "@/components/organisms/policiesSections/termSection/termSection";
import Footer from "@/components/molecules/footer/footer";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Policies() {
  return (
    <Suspense>
      <PoliciesPage />
    </Suspense>
  );
}

function PoliciesPage() {
  const searchParams = useSearchParams();
  const [section, setSection] = useState(
    searchParams.get("section") ?? "privacy"
  );

  const sectionMap: { [key: string]: any } = {
    delivery: <DeliverySection />,
    exchanges: <ExchangesSection />,
    privacy: <PrivacySection />,
    term: <TermSection />,
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
              className={`${styles.navTextBox} ${styles.divisionBorder} ${
                section == "delivery" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("delivery")}
            >
              Política de Entrega
            </section>
            <section
              className={`${styles.navTextBox} ${styles.divisionBorder} ${
                section == "exchanges" ? styles.selected : null
              }`}
              onClick={() => handleChangeSection("exchanges")}
            >
              Política de Trocas e Devoluções
            </section>
            <section
              className={`${styles.navTextBox} ${styles.divisionBorder} ${
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
        <Footer />
      </section>
    </main>
  );
}
