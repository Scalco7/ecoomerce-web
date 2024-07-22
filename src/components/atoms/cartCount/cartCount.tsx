import { Anton } from "next/font/google";
import styles from "./style.module.css";
import CartIcon from "../cartIcon/cartIcon";

interface CartCountProps {
  quantity: number;
  onClick: () => void;
}

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function CartCount({ quantity, onClick }: CartCountProps) {
  return (
    <main className={styles.cart} onClick={onClick}>
      {quantity > 0 && (
        <section className={styles.redBox}>
          <p className={`${styles.text} ${anton.className}`}>{quantity}</p>
        </section>
      )}
      <CartIcon size={40} color={"white"} />
    </main>
  );
}
