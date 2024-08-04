import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";
import CartIcon from "../../icons/cartIcon/cartIcon";
import { formatNumberToValue } from "@/utils/number.utils";

interface PriceTagProps {
  price: number;
  onClick: () => void;
}

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function PriceTag({ price, onClick }: PriceTagProps) {
  const [isHover, setIsHover] = useState(false);

  function handleOnMouseEnter() {
    setIsHover(true);
  }

  function handleOnMouseLeave() {
    setIsHover(false);
  }

  return (
    <main
      className={`${poppins.className} ${styles.main}`}
      onClick={onClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isHover ? (
        <CartIcon size={20} color={"white"} />
      ) : (
        <p className={styles.text}>{formatNumberToValue(price)}</p>
      )}
    </main>
  );
}
