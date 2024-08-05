import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function PrivacySection() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Políticas de Privacidade</p>
      <section className={`${styles.boxText} ${zillaSlab.className}`}>
        <p>
          A ALPHA CO COMÉRCIO E INDÚSTRIA DE ARTIGOS E VESTUÁRIO LTDA valoriza a
          segurança da informação e, por isso, observa atentamente todas as
          implicações do tratamento de seus dados. Respeitamos e reafirmamos
          nosso compromisso com a sua segurança, privacidade e garantimos o
          sigilo das informações que você nos fornece, seja direta ou
          indiretamente. Diante de tais pressupostos, nossa Política de
          Privacidade serve como uma instrução sobre a forma e situações em que
          tratamos seus dados pessoais. Subsistindo qualquer dúvida em relação
          aos seus dados pessoais, não hesite em contactar nossa equipe através
          dos canais de comunicação disponíveis neste sítio eletrônico.
        </p>
      </section>
    </main>
  );
}
