import { Anton } from "next/font/google";
import styles from "./style.module.css";
import CartIcon from "../../icons/cartIcon/cartIcon";

interface CartCountProps {
  quantity: number;
  fontSize: number;
  onClick: () => void;
}

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function CartCount({
  quantity,
  fontSize,
  onClick,
}: CartCountProps) {
  return (
    <main className={styles.cart} onClick={onClick}>
      {quantity > 0 && (
        <section className={styles.redBox}>
          <p
            className={`${styles.text} ${anton.className}`}
            style={{ fontSize: fontSize }}
          >
            {quantity}
          </p>
        </section>
      )}
      <CartIcon size={"100%"} color={"white"} />
    </main>
  );
}
