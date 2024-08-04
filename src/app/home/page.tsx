"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import PresentationSection from "@/components/organisms/homePageSections/presentationSection/presentationSection";
import ShopSection from "@/components/organisms/homePageSections/shopSection/shopSection";
import HistorySection from "@/components/organisms/homePageSections/historySection/historySection";
import TShirtSellSection from "@/components/organisms/homePageSections/tShirtSellSection/tShirtSellSection";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <PresentationSection />
      <div style={{ height: 40 }}></div>
      <TShirtSellSection />
      <ShopSection />
      <HistorySection />
      <Footer />
    </main>
  );
}
