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
      <main className={styles.main}>
        <p className={styles.title}>Políticas de Prazo e Forma de Entrega</p>
        <section className={styles.boxText}>
          <section>
            <p>1. Prazo de Entrega</p>
            <p className={zillaSlab.className}>
              - O prazo de entrega varia de acordo com o endereço do cliente e a
              modalidade de envio escolhida. O prazo estimado será informado no
              momento da compra.
              <br />- Em casos de eventos extraordinários, como greves,
              condições climáticas adversas ou períodos de alta demanda, podem
              ocorrer atrasos, que serão comunicados ao cliente.
            </p>
          </section>
          <section>
            <p>2. Formas de Entrega</p>
            <p className={zillaSlab.className}>
              - A Banana {"Monkey's"} oferece diferentes formas de entrega,
              incluindo entrega expressa e entrega padrão, cujas opções estarão
              disponíveis no momento da finalização da compra.
              <br />- O cliente deve certificar-se de que haverá alguém
              disponível para receber o produto no endereço indicado.
            </p>
          </section>
        </section>
      </main>
    </main>
  );
}
