import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

export type PaymentOption = "card" | "pix";

interface PaymentOptionSwitch {
  paymentOption: PaymentOption;
  onChange: (type: PaymentOption) => void;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function PaymentOptionSwitch({
  paymentOption,
  onChange,
}: PaymentOptionSwitch) {
  return (
    <main className={styles.main}>
      <p className={`${zillaSlab.className} ${styles.title}`}>
        3 - Método de pagamento
      </p>
      <section>
        <section className={`${zillaSlab.className} ${styles.buttonsSection}`}>
          <div
            className={`${styles.buttonBox} ${
              paymentOption == "pix" ? styles.buttonSelected : null
            }`}
            onClick={() => onChange("pix")}
          >
            Pix
          </div>
          <div
            className={`${styles.buttonBox} ${
              paymentOption == "card" ? styles.buttonSelected : null
            }`}
            onClick={() => onChange("card")}
          >
            Cartão
          </div>
        </section>
        {paymentOption == "pix" && <section>Pix</section>}
        {paymentOption == "card" && <section>Cartão</section>}
      </section>
    </main>
  );
}
