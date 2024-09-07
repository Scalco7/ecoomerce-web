"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import { Toaster } from "react-hot-toast";
import styles from "./style.module.css";

export default function CheckoutCart() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <Footer />
      </section>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
