import { Poppins } from "next/font/google";
import styles from "./styles.module.css";
import { formatNumberToValue } from "@/utils/number.utils";

interface ShowPriceCartProps {
  productQuantity: number;
  price: number;
  priceWithDiscount: number;
}

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function ShowPriceCart({
  productQuantity,
  price,
  priceWithDiscount,
}: ShowPriceCartProps) {
  return (
    <main className={styles.main}>
      <section className={styles.textBox}>
        <p>
          Sub-total ({productQuantity} produto{productQuantity > 1 ? "s" : ""})
        </p>
        <p className={poppins.className}>{formatNumberToValue(price)}</p>
      </section>
      <section className={styles.textBox}>
        <p className={styles.discountPrice}>Total</p>
        <p className={`${poppins.className} ${styles.discountPrice}`}>
          {formatNumberToValue(priceWithDiscount)}
        </p>
      </section>
    </main>
  );
}
