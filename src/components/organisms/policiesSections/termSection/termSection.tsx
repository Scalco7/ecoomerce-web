import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function TermSection() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Política de Prazo e Formas e Entrega</p>
      <section className={`${styles.boxText} ${zillaSlab.className}`}>
        <p>
          Política de Prazo e Formas e EntregaPolítica de Prazo e Formas e
          EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo e Formas
          e EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo e
          Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo
          e Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica de
          Prazo e Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica
          de Prazo e Formas e EntregaPolítica de Prazo e Formas e
          EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo e Formas
          e EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo e
          Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica de Prazo
          e Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica de
          Prazo e Formas e EntregaPolítica de Prazo e Formas e EntregaPolítica
          de Prazo e Formas e EntregaPolítica de Prazo e Formas e Entrega
        </p>
      </section>
    </main>
  );
}
