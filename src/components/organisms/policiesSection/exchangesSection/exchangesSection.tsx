import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function ExchangesSection() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Política de Trocas e Devoluções</p>
      <section className={`${styles.boxText} ${zillaSlab.className}`}>
        <p>
          Trocas e devoluções Trocas e devoluções Trocas e devoluções Trocas e
          devoluçõesTrocas e devoluçõesTrocas e devoluçõesTrocas e
          devoluçõesTrocas e devoluções Trocas e devoluções Trocas e devoluções
          Trocas e devoluções Trocas e devoluçõesTrocas e devoluções Trocas e
          devoluções Trocas e devoluções Trocas e devoluções Trocas e
          devoluçõesTrocas e devoluções Trocas e devoluções
        </p>
      </section>
    </main>
  );
}
