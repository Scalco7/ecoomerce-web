import { Poppins, Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import { formatNumberToValue } from "@/utils/number.utils";
import TruckIcon from "@/components/icons/truckIcon/truckIcon";
import CorrectIcon from "@/components/icons/correctIcon/correctIcon";

interface FreeShippingCounterCartProps {
  freeShippingValue: number;
  value: number;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function FreeShippingCounterCart({
  freeShippingValue,
  value,
}: FreeShippingCounterCartProps) {
  const hasFreeShipping = value > freeShippingValue;
  const missingValue = freeShippingValue - value;
  const percentage = (value * 100) / freeShippingValue;

  return (
    <main className={styles.main}>
      <section className={styles.titleSection}>
        <TruckIcon size={24} color="#000" />
        <p className={styles.title}>
          Frete grátis para{" "}
          <span className={zillaSlab.className}>todo o Brasil</span>
        </p>
      </section>
      {hasFreeShipping ? (
        <section className={styles.freeShippingSection}>
          <CorrectIcon size={30} color="#00FF09" />
          <p>
            Aproveite o{" "}
            <span className={zillaSlab.className}>Frete grátis</span>
          </p>
        </section>
      ) : (
        <section className={styles.progressSection}>
          <p>
            Faltam{" "}
            <span className={`${poppins.className} ${styles.valueText}`}>
              {formatNumberToValue(missingValue)}
            </span>{" "}
            para o{" "}
            <span
              className={`${styles.freeShippingText} ${zillaSlab.className}`}
            >
              Frete grátis
            </span>
          </p>
          <div className={styles.progressBox}>
            <div
              className={styles.progressBar}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </section>
      )}
    </main>
  );
}
