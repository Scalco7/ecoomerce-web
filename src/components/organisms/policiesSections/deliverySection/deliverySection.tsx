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
      <main className={styles.main}>
        <p className={styles.title}>Políticas de Entrega</p>
        <section className={styles.boxText}>
          <section>
            <p>1. Condições de Entrega</p>
            <p className={zillaSlab.className}>
              - A Banana Monkeys realiza entregas em todo o território nacional,
              utilizando serviços de correios ou transportadoras parceiras.
              <br /> - O prazo de entrega pode variar conforme a localidade do
              destinatário e a forma de envio escolhida.
            </p>
          </section>
          <section>
            <p>2. Custos de Entrega</p>
            <p className={zillaSlab.className}>
              O custo de entrega será calculado no momento da finalização da
              compra, com base no CEP informado e no peso/volume dos produtos.
            </p>
          </section>
          <section>
            <p>3. Tentativas de Entrega</p>
            <p className={zillaSlab.className}>
              Serão feitas até três tentativas de entrega. Caso não seja
              possível realizar a entrega, o produto será retornado à Banana
              Monkeys, e o cliente será responsável pelos custos de um novo
              envio.
            </p>
          </section>
        </section>
      </main>
    </main>
  );
}
