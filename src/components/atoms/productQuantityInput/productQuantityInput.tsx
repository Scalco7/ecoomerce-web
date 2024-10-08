import styles from "./styles.module.css";
import { Poppins } from "next/font/google";
import PlusIcon from "../../icons/plusIcon/plusIcon";
import MinusIcon from "../../icons/minusIcon/minusIcon";

interface ProductQuantityInputProps {
  fontSize: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function ProductQuantityInput({
  fontSize,
  quantity,
  onIncrease,
  onDecrease,
}: ProductQuantityInputProps) {
  const iconsHeight = fontSize * 1.2;

  function handleDecrease() {
    if (quantity > 0) onDecrease();
  }

  function handleIncrease() {
    if (quantity < 99) onIncrease();
  }

  return (
    <main className={styles.main}>
      <section
        className={styles.changeSection}
        onClick={(evt) => {
          evt.stopPropagation();
          handleDecrease();
        }}
      >
        <MinusIcon size={iconsHeight} color="black" />
      </section>
      <section
        className={`${poppins.className} ${styles.text}`}
        style={{ fontSize: fontSize, width: fontSize * 1.3 }}
      >
        {quantity}
      </section>
      <section
        className={styles.changeSection}
        onClick={(evt) => {
          evt.stopPropagation();
          handleIncrease();
        }}
      >
        <PlusIcon size={iconsHeight} color="black" />
      </section>
    </main>
  );
}
