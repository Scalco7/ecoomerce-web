"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import PresentationSection from "@/components/organisms/homePageSections/presentationSection/presentationSection";
import ShopSection from "@/components/organisms/homePageSections/shopSection/shopSection";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <PresentationSection />
      <ShopSection />
      <Footer />
    </main>
  );
}
