"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import PresentationSection from "@/components/organisms/homePageSections/presentationSection/presentationSection";
import ShopSection from "@/components/organisms/homePageSections/shopSection/shopSection";
import HistorySection from "@/components/organisms/homePageSections/historySection/historySection";
import TShirtSellSection from "@/components/organisms/homePageSections/tShirtSellSection/tShirtSellSection";
import YellowTextBanner from "@/components/atoms/yellowTextBanner/yellowTextBanner";
import CapSellSection from "@/components/organisms/homePageSections/capSellSection/capSellSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <PresentationSection />
        <div style={{ height: 40 }}></div>
        <TShirtSellSection />
        <div className={styles.desktopSection}>
          <YellowTextBanner text="Tecidos pensados para seu extremo conforto e versatilidade" />
        </div>
        <div style={{ height: 20 }}></div>
        <CapSellSection />
        <div className={styles.desktopSection}>
          <ShopSection />
        </div>
        <HistorySection />
        <Footer />
      </section>
    </main>
  );
}
