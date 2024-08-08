import styles from "./style.module.css";
import Cart from "@/components/molecules/cart/cart";

interface CartSectionProps {
  open: boolean;
  closeCart: () => void;
}

export default function CartSection({ open, closeCart }: CartSectionProps) {
  return (
    <>
      {open && (
        <main className={styles.main}>
          <section
            style={{ width: "-webkit-fill-available", height: "100%" }}
            onClick={closeCart}
          ></section>
          <Cart closeCart={closeCart}></Cart>
        </main>
      )}
    </>
  );
}
