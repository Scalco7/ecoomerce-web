"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import ShopProductsSection from "@/components/organisms/shopPageSections/shopProductsSection/shopProductsSection";
import TopSection from "@/components/organisms/shopPageSections/topSection/topSection";

export default function Shop() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <TopSection />
        <ShopProductsSection />
        <Footer />
      </section>
    </main>
  );
}
