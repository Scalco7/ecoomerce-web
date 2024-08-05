import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function DeliverySection() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Política de Entrega</p>
      <section className={`${styles.boxText} ${zillaSlab.className}`}>
        <p>
          Entrega Entrega Entrega Entrega, Entrega Entrega Entrega Entrega
          Entrega Entrega Entrega Entrega Entrega Entrega Entrega Entrega
          Entrega Entrega Entrega Entrega Entrega Entrega Entrega EntregaEntrega
          Entrega Entrega EntregaEntrega Entrega Entrega Entrega Entrega Entrega
          Entrega Entrega Entrega Entrega Entrega EntregaEntrega Entrega Entrega
          EntregaEntrega Entrega Entrega EntregaEntrega Entrega Entrega Entrega
        </p>
      </section>
    </main>
  );
}
