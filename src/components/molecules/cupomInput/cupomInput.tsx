import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";
import { useCoupon } from "@/states/couponState";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function CupomInput() {
  const { coupon, setCoupon } = useCoupon();
  const [inputValue, setInputValue] = useState("");

  function applyCupom() {
    if (inputValue != "" && inputValue != " ")
      setCoupon({ name: inputValue, discountPercentage: 10 });
  }

  function removeCupom() {
    setCoupon();
  }

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    value = value.slice(0, 16).toUpperCase();

    setInputValue(value);
  }

  function handleOnClickButton() {
    if (coupon) removeCupom();
    else applyCupom();
  }

  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <p className={styles.labelText}>Cupom:</p>
      <div className={styles.inputBox}>
        <input
          className={`${poppins.className} ${styles.input}`}
          style={{
            background: coupon ? "#C6FFAB" : "transparent",
          }}
          value={coupon ? coupon.name : inputValue}
          placeholder="CUPOM"
          autoComplete="none"
          disabled={!!coupon}
          onChange={handleOnChangeValue}
        />
        <div className={styles.buttonBox} onClick={handleOnClickButton}>
          {coupon ? "Remover" : "Aplicar"}
        </div>
      </div>
    </main>
  );
}
