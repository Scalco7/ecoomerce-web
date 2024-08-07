import CartIcon from "@/components/icons/cartIcon/cartIcon";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Cart() {
  return (
    <main className={styles.main}>
      <section className={styles.titleBox}>
        <CartIcon size={28} color="#000" />
        <p className={`${styles.title} ${zillaSlab.className}`}>
          Carrinho de compras
        </p>
      </section>
    </main>
  );
}
