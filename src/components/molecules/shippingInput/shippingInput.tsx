import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

function cepMask(number: string): string {
  number = number.replace(/\D/g, "");

  if (number.length <= 5) {
    return number;
  }

  return `${number.slice(0, 5)}-${number.slice(5, 8)}`;
}

export default function ShippingInput() {
  const [inputValue, setInputValue] = useState("");

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    value = cepMask(value);

    setInputValue(value);
  }

  function handleOnClickButton() {}

  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <p className={styles.labelText}>Calcular frete:</p>
      <div className={styles.inputBox}>
        <input
          className={`${poppins.className} ${styles.input}`}
          value={inputValue}
          placeholder="00000-000"
          autoComplete="postal-code"
          onChange={handleOnChangeValue}
        />
        <div className={styles.buttonBox} onClick={handleOnClickButton}>
          Calcular
        </div>
      </div>
    </main>
  );
}
