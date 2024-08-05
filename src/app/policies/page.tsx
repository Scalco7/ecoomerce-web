"use client";

import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";

export default function Policies() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  console.log(section);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <p className={styles.title}>Políticas do Site</p>
      </section>
    </main>
  );
}
