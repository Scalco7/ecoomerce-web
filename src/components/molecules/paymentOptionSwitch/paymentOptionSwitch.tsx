import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import Input from "@/components/atoms/input/input";
import { CardData } from "@/app/checkout/payment/page";

export type PaymentOption = "card" | "pix";

interface PaymentOptionSwitch {
  form: CardData;
  paymentOption: PaymentOption;
  onChange: (type: PaymentOption) => void;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function PaymentOptionSwitch({
  form,
  paymentOption,
  onChange,
}: PaymentOptionSwitch) {
  return (
    <main className={styles.main}>
      <p className={`${zillaSlab.className} ${styles.title}`}>
        3 - Método de pagamento
      </p>

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
      <section className={styles.paymentDataSection}>
        {paymentOption == "pix" && (
          <section className={styles.pixSection}>
            <p className={`${zillaSlab.className} ${styles.pixTitle}`}>
              Ganhe 5% de desconto usando Pix
            </p>
            <p className={styles.pixText}>
              O pagamento pelo pix é muito simples, basta escanear o Qr code na
              hora do pagamento.
            </p>
          </section>
        )}
        {paymentOption == "card" && (
          <section className={styles.cardSection}>
            <Input
              placeholder="Nome do titular do cartão"
              type="text"
              //   autocomplete="address-level2"
              controller={form.name}
            />
            <Input
              placeholder="Número do cartão"
              type="text"
              //   autocomplete="address-level3"
              controller={form.cardNumber}
            />
            <section className={styles.rowSection}>
              <Input
                placeholder="Data de validade"
                type="text"
                // autocomplete="address-line1"
                controller={form.validateDate}
              />
              <div className={styles.formCodeBox}>
                <Input
                  placeholder="Cód."
                  type="number"
                  //   autocomplete="address-line2"
                  controller={form.code}
                />
              </div>
            </section>
          </section>
        )}
      </section>
    </main>
  );
}
